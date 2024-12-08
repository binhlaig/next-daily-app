
import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer'
import { useEffect, useState } from 'react';


const PDFDocument = () => {

  const [collections, setCollections] = useState([]);

  const getWorkDetails = async () => {
    const response = await fetch('/api/pdf', {
      method: "GET",
    });
    const data = await response.json();
    setCollections(data);
    console.log(response);
  };

  useEffect(() => {
    getWorkDetails();
  }, []);

  // Create styles
  const styles = StyleSheet.create({
    page: {
      padding: 20
    },
    header: {
      flexDirection: 'row',
      marginBottom: '15px',
      gap: '5',
    },

    textcontainer: {

      alignItems: 'center',
      marginLeft: '20px'
    },
    textone: {
      fontSize: '18px',
      fontWeight: "bold",
      letterSpacing: '2px',
      marginBottom: "3px",

    },
    texttwo: {
      fontSize: '12px',
      textAlign: 'center',
      letterSpacing: '2px',
      marginBottom: "3px",

    },
    tableHeader: {
      flexDirection: 'row',
      border: '1',
      borderColor: "black",
    },
    tableColumn1: {
      width: "40%",
      textAlign: "left",
      fontSize: "11px",
      paddingBottom: "10px",
      paddingTop: "10px",
      marginLeft: "11px",

    },
    tableColumn2: {
      width: "20%",
      textAlign: "left",
      borderLeft: '1',
      borderColor: "black",
      fontSize: "11px",
      paddingBottom: "15px",
      paddingTop: "10px",
      paddingLeft: "11px",

    },
    tableRow: {
      flexDirection: 'row',
      border: '1',
      borderColor: "black",
      borderTop: "none"
    },


  });

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <view style={styles.header}>
          <view style={styles.textcontainer}>
            <Text style={styles.textone} >Outcome</Text>
            <Text style={styles.texttwo}> Daily Use outcome PDF</Text>
          </view>
        </view>
        <view style={styles.tableHeader}>
          <Text style={styles.tableColumn1}>Shop Name</Text>
          <Text style={styles.tableColumn2}>Amount</Text>
          <Text style={styles.tableColumn2}>Bank</Text>
          <Text style={styles.tableColumn2}>Notice</Text>
        </view>

        {collections.map((data, index) => (
          <view style={styles.tableRow} key={index}>
            <Text style={styles.tableColumn1}>{data.shop}</Text>
            <Text style={styles.tableColumn2}>{data.amount} ¥</Text>
            <Text style={styles.tableColumn2}>{data.bank}</Text>
            <Text style={styles.tableColumn2}>{data.notice}</Text>
          </view>
        ))}
      </Page>
    </Document>
  )
}

export default PDFDocument 
