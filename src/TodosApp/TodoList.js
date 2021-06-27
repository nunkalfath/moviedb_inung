import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';

export const TodoList = () => {
  const [data, setData] = useState([{id: 1, title: 'Task 1', active: false}]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');

  const renderItem = ({item}) => {
    return (
      <View>
        <CheckBox
          disabled={false}
          value={item.active}
          onValueChange={newValue => setToggleCheckBox(newValue, index)}
        />
        <Text>{item.title}</Text>
      </View>
    );
  };
  const openModal = () => {
    setIsModalVisible(true);
  };
  const saveTitle = () => {
    let newArr = [...data];
    newArr.push({id: newArr.length + 1, title: title, active: false});
    setData(newArr);
  };
  const setToggleCheckBox = (value, index) => {
    let newArr = [...data];
    newArr[index].active = !newArr[index].active;
    setData(newArr);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.title}>Todos</Text>
        <FlatList data={data} renderItem={renderItem} />
        <TouchableOpacity style={styles.AddBtnWrapper} onPress={openModal}>
          <Image style={styles.addIcon} source={require('../asset/add.jpeg')} />
        </TouchableOpacity>
      </SafeAreaView>
      <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.modalContentWrapper}>
          <TouchableOpacity
            style={styles.closeBtnWrapper}
            onPress={() => setIsModalVisible(false)}>
            <Image
              style={styles.closeIcon}
              source={require('../asset/close.png')}
            />
          </TouchableOpacity>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder={'Please enter the task title'}
              onChangeText={text => setTitle(text)}></TextInput>
            <TouchableOpacity style={styles.btnWrapper} onPress={saveTitle}>
              <Text style={{textAlign: 'center'}}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
  },
  addIcon: {
    width: 50,
    height: 50,
  },
  AddBtnWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  modalContentWrapper: {
    height: '50%',
    marginTop: 'auto',
    backgroundColor: 'green',
    padding: 10,
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  closeBtnWrapper: {
    alignItems: 'flex-end',
  },
  inputWrapper: {
    marginTop: 60,
  },
  textInput: {
    padding: 15,
    backgroundColor: 'white',
    fontSize: 20,
  },
  btnWrapper: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 15,
  },
});
