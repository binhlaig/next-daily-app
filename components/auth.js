

import User from "@/models/User";
import { connectToDB } from "@/mongodb/database";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                if (!credentials.email || !credentials.password) {
                    throw new Error("Invalid Email or Password");
                }
                await connectToDB();

                /* Check if the user exists */
                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    throw new Error("Invalid Email or Password");
                }

                /* Compare password */
                const isMatch = await compare(credentials.password, user.password);

                if (!isMatch) {
                    throw new Error("Invalid Email or Password");
                }

                return user;
            },
        }),
    ],

    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();

            session.user = { ...session.user, ...sessionUser._doc }

            return session;
        },

        async signIn({ user, account, profile }) {
            console.log(user, account, profile);
            if (account.provider === 'github') {
                connectToDB();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        });

                        await newUser.save();
                    }

                } catch (err) {
                    console.log(err);
                    return false
                }
            }
            return true;
        },
       
    }
}

export default NextAuth(authOptions)