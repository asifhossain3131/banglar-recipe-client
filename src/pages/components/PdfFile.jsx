import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import FAQ from '../../assets/images/faq.png'

const styles = StyleSheet.create({
    page: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      section: {
        margin: 12,
        padding: 10,
      },
      text: {
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
      },
      img: {
        marginVertical: 15,
        marginHorizontal: 100,
      },
      header: {
        fontSize: 32,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
      },
      pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
      }
  });

const PdfFile = () => {
    return (
        <Document>
      <Page size='A4' style={styles.page}>
<Text style={styles.header} fixed>
Most Frequantly asked Questions.
</Text>
<Image src={FAQ} style={styles.img}/>
<View style={styles.section}>
        <Text style={styles.text}>
        1. The differences between uncontrolled and controlled components. 
        Ans:  Usually react controls its components and programmer doesn't need to control DOM as react does itself. Whenever a change is made, react components stores it in state and renders accordinly. As react components manage states and behavior itself, thus it is called controlled component. On the other hand, When we handle DOM by ourselves, react components don't control its behavior, meaning that it doesn't stores any changes or data in state. Instead, programmer has to do it manually. This kinds of components are called uncontrolled components.
        </Text>
      </View>
<View style={styles.section}>
        <Text style={styles.text}>
        2. How to validate React props using PropTypes?
        Ans:   We use props in react to pass data between components. If the components recieves wrong type of props data, then it causes bugs and unexpected errors in the app. To fix this, we can tell data type while passing props. Though javascript does not have its built in data type check method, but react has a package called React Proptypes that checks data type. While passing props, we can tell its data type. For exmaple, PropTypes.array that checks whether it is array or not. In this way, we can validate props.
        </Text>
      </View>
<View style={styles.section}>
        <Text style={styles.text}>
        3.The difference between nodejs and express js.
        Ans:  A javascript runtime environment as well as an open souce that is being designed to build scalable network app. It is built on google's V8 engine that makes its performance higher. As a server side technologyo for modern website like SPA, node.js plays an important role to render server side template. On the other hand, express.js is  a node.js framework that makes it easy to build the server side faster and it's the major differnce between node.js and express.js. If we would write codes in node.js, it would take much time whereas express.js optimizes codes and makes it shorter. 
        </Text>
      </View>
<View style={styles.section}>
        <Text style={styles.text}>
        4. What is a custom hook, and why will you create a custom hook?
        Ans: Hooks are nothing, but javascript functions that can be reused over time. React has some built in hooks. But if we have a logic that might be used for multiple components, we can make our own hook and can use it. It's called custom hook. In custom hooks, we can keep multiple logics and nested functionality if we need. Custom hooks and built in hooks start with use. For example- useRender().
      So, we will use custom hooks whenever we have our own logic that can't be worked with built in hooks.
        </Text>
      </View>
<View style={styles.section}>
        <Text style={styles.text}>
       5. Why is Node.js Single-threaded?
        Ans:  Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.
        </Text>
      </View>
<View style={styles.section}>
        <Text style={styles.text}>
      6. Explain callback in Node.js.
        Ans: A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.
        </Text>
      </View>
<View style={styles.section}>
        <Text style={styles.text}>
     7. What is NPM?
        Ans:  NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.
Node Package Manager provides two main functionalities:
Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org
Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies  
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
  8. What is the purpose of the module .Exports?
        Ans: In Node.js, a module encapsulates all related codes into a single unit of code that can be parsed by moving all relevant functions into a single file. You may export a module with the module and export the function, which lets it be imported into another file with a needed keyword. 
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
  9. What is a state in React and how is it used?
        Ans: States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
 10. What is JSX?
        Ans: JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand.
        </Text>
      </View>
      <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />

      </Page>
      </Document>
    );
};

export default PdfFile;