import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import {Pressable} from 'react-native';
import { Alert } from 'react-native';

function PdfBasic() {
  const [pdfPath, setPdfPath] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(10);

  const orderLines = [
    {
      id: 1,
      product: 'Product 1',
      quantity: 1,
      price: '$10.00',
    },
    {
      id: 2,
      product: 'Product 2',
      quantity: 1,
      price: '$10.00',
    },
    {
      id: 3,
      product: 'Product 3',
      quantity: 1,
      price: '$10.00',
    },
  ];

  const people = [
    {
      name : "holo",
      lastName : 'molo'
    },
    {
      name : 'Dio',
      lastName: 'mio'
    }
  ]

  const generatePDF = async () => {
    setIsLoading(true);

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Table Example</title>
    </head>
    <body>
    
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Lastname</th>
      </tr>
      ${people.map(line => `
        <tr>
          <td>${line.name}</td>
          <td>${line.lastName}</td>
        </tr>
      `).join('')}
    </table>
    </body>
    </html>
    `;

    const options = {
      html,
      fileName: `invoice_${count}`,
      directory: 'Invoices'
    }
    const file = await RNHTMLtoPDF.convert(options);
    Alert.alert("Success", `PDF saved to ${file.filePath}` );
    setCount(count+1);
    setIsLoading(false)
    const fileExists = await RNFS.exists(file.filePath);
    if(!fileExists){
      console.log("File does not exist!");
      return;
    }
    setPdfPath(file.filePath);
   
    try {
    } catch (err) {
      console.error(err);
    }
  };

  if(isLoading){
    return <Text>Generating PDF ...</Text>
  }

  return (
    <View>
      <Pressable
        onPress={() => generatePDF()}
        style={{backgroundColor: 'lightgray', padding: 30, margin: 30}}>
        <Text style={{textAlign: 'center'}}>Generate PDF</Text>
      </Pressable>

      {pdfPath && <Pdf source={{uri : 'file://' + pdfPath }} /> }
    </View>
  );
}

export default PdfBasic;

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
