import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { IconButton } from "react-native-paper";
import Fallback from "./fallback";
import axios from "axios";
const Task = (props) => {
  //initial states
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editItem, setEditItem] = useState(null);
  //   const fetchData = () => {
  //     fetch("http://localhost:8008/")
  //       .then((response) => response.json())
  //       .then((data) => setList(data))
  //       .catch((error) => console.error(error));
  //   };

  //   useEffect(() => {
  //     fetch("http://localhost:8008/")
  //       .then((response) => response.json())
  //       .then((data) => setList(data))
  //       .catch((error) => console.error(error));
  //   }, []);

  const handleAdd = async () => {
    if (input == "") {
      return;
    }
    // let data = { id: Date.now().toString(), title: input };
    // try {
    //   await axios.post(`http://localhost:8008/`, data).then((res) => {
    //     alert("List added successfully!", res);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    setList([...list, { id: Date.now().toString(), title: input }]);
    setInput("");
  };
  const HandleEdit = (item) => {
    setEditItem(item);
    setInput(item.title);
  };
  const handleSave = () => {
    // const { title } = input;
    // e.preventDefault();
    // axios
    //   .put(`https://crud-backend-qw7t.onrender.com/edit/${id}`, title)
    //   .then(() => {
    //     fetchData();
    //   });
    const updatedList = list.map((e) => {
      if (e.id === editItem.id) {
        return { ...e, title: input };
      }
      return e;
    });
    setList(updatedList);
    setEditItem(null);
    setInput("");
  };
  const HandleDelete = (id) => {
    const updatedList = list.filter((e, i) => id !== e.id);
    setList([...updatedList]);
  };
  const renderTodos = ({ item, index }) => {
    return (
      <View style={styles.flatviews}>
        <Text style={styles.flatItems}>{item.title}</Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => HandleEdit(item)}
        />
        <IconButton
          icon="delete"
          iconColor="#fff"
          onPress={() => HandleDelete(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Add a task"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      {editItem ? (
        <TouchableOpacity style={styles.touchable} onPress={handleSave}>
          <Text style={styles.text2}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.touchable} onPress={handleAdd}>
          <Text style={styles.text2}>Add</Text>
        </TouchableOpacity>
      )}
      <FlatList data={list} renderItem={renderTodos} />
      {list.length <= 0 && <Fallback />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  text: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadious: "6",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  touchable: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 8,
    marginTop: 24,
    marginVertical: 34,
    alignItems: "center",
  },
  text2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  flatviews: {
    backgroundColor: "#1e90ff",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  flatItems: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    flex: 1,
  },
});

export default Task;
