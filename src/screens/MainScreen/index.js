import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';
import Button from '../../components/Button';
import {removeToken} from '../../redux/actions';
import {FlatList} from 'react-native-gesture-handler';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function StatusTask(props) {
  return (
    <TouchableOpacity
      style={styles.todo_task}
      onPress={() => props.navigation.navigate('ToDo')}>
      <View
        style={
          !props.bgColor
            ? styles.myTask_toDo
            : [styles.myTask_toDo, {backgroundColor: props.bgColor}]
        }>
        <Image source={props.icon} style={{height: 25, width: 25}}></Image>
      </View>

      <View style={{flexDirection: 'column', marginHorizontal: 8}}>
        <Text>{props.type}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.task_text}>{props.now} tasks now -</Text>
          <Text style={styles.task_text}>{props.completed} completed</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default function MainScreen({navigation}) {
  const icons = {
    todo: require('../../assets/icon/icon-todo.png'),
    inProgress: require('../../assets/icon/icon-progress.png'),
    done: require('../../assets/icon/icon-done.png'),
    calender: require('../../assets/icon/icon-calender.png'),
    search: require('../../assets/icon/icon-search-dark.png'),
    menu: require('../../assets/icon/icon-menu-dark.png'),
  };

  const bgColor = {
    inProgress: '#f9be7c',
    done: '#6488e4',
    calender: '#309397',
    folder: '#0d253f',
    red_folder: '#e46472',
    bg: '#fff9ec',
  };

  const [task, setTask] = useState([
    {
      status: 'To do',
      task: [
        {
          id: 1,
          title: 'Buy milk',
          description: 'Buy milk for Baby',
          time: 10,
          date: '18-9-2020',
          location: '12, Lang Ha, Ha Noi',
          category: 'Medical',
          completed: true,
        },
        {
          id: 2,
          title: 'Buy ball',
          description: 'Buy ball for Baby',
          time: 6,
          date: '18-9-2020',
          location: '12, Lang Ha, Ha Noi',
          category: 'Sport',
          completed: false,
        },
        {
          id: 3,
          title: 'Hangout',
          description: 'Hangout with ur Baby',
          time: 12,
          date: '18-9-2020',
          location: '12, Lang Ha, Ha Noi',
          category: 'Life',
          completed: false,
        },
      ],
    },
    {
      status: 'In progress',
      task: [
        {
          id: 1,
          title: 'Buy milk',
          description: 'Buy milk for Baby',
          time: 10,
          date: '18-9-2020',
          location: '12, Lang Ha, Ha Noi',
          category: 'Medical',
          completed: true,
        },
        {
          id: 2,
          title: 'Buy ball',
          description: 'Buy ball for Baby',
          time: 6,
          date: '18-9-2020',
          location: '12, Lang Ha, Ha Noi',
          category: 'Sport',
          completed: false,
        },
      ],
    },
    {
      status: 'Done',
      task: [
        {
          id: 1,
          title: 'Buy milk',
          description: 'Buy milk for Baby',
          time: 10,
          date: '18-9-2020',
          location: '12, Lang Ha, Ha Noi',
          category: 'Medical',
          completed: true,
        },
      ],
    },
  ]);

  const [folder, setFolder] = useState([
    {
      category: 'sport',
      task: [
        {
          key: '1',
          text: 'Buy milk',
          time: '4:00',
          completed: 'false',
          category: 'sport',
        },
        {
          key: '2',
          text: 'Buy coffee',
          time: '7:00',
          completed: 'true',
          category: 'sport',
        },
      ],
    },
    {
      category: 'medical',
      task: [
        {
          key: '3',
          text: 'Buy game',
          time: '12:00',
          completed: 'false',
          category: 'medical',
        },
      ],
    },
    {
      category: 'study',
      task: [
        {
          key: '4',
          text: 'Buy ball',
          time: '11:00',
          completed: 'true',
          category: 'study',
        },
        {
          key: '5',
          text: 'Buy app',
          time: '19:00',
          completed: 'true',
          category: 'study',
        },
      ],
    },
    {
      category: 'Game',
      task: [
        {
          key: '4',
          text: 'Buy ball',
          time: '11:00',
          completed: 'true',
          category: 'study',
        },
        {
          key: '5',
          text: 'Buy app',
          time: '19:00',
          completed: 'true',
          category: 'study',
        },
        {
          key: '5',
          text: 'Buy Game',
          time: '19:00',
          completed: 'true',
          category: 'study',
        },
        {
          key: '5',
          text: 'Buy Aplele',
          time: '19:00',
          completed: 'true',
          category: 'study',
        },
      ],
    },
  ]);

  const [user, setUser] = useState({
    name: 'Tea',
    info: 'Intern Ship',
    img: require('../../assets/profile_avatar.jpg'),
  });

  const todo = task[0].task;
  const inProgress = task[1].task;
  const done = task[2].task;
  const t = todo.filter((t) => {
    return t.completed === true;
  });
  const i = inProgress.filter((t) => {
    return t.completed === true;
  });
  const d = done.filter((t) => {
    return t.completed === true;
  });

  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={icons.menu} style={{width: 30, height: 30}}></Image>
        </TouchableOpacity>
        <TextInput
          style={styles.search_text}
          onChangeText={(text) => setSearchText(text)}
          placeholder={`Type your task `}
          vi
        />
        <TouchableOpacity>
          <Image source={icons.search} style={{width: 30, height: 30}}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {user: user})}
          style={styles.container_profile}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={styles.container_avatar}>
              <Image source={user.img} style={styles.profile_avatar} />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 18}}>
              <Text style={styles.profile_name}>{user.name}</Text>
              <Text style={styles.profile_info}>{user.info}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.container_myTask}>
          <View style={styles.title_task}>
            <Text style={{fontSize: 25}}>My tasks</Text>
            <TouchableOpacity
              style={[
                styles.calender_icon,
                {backgroundColor: bgColor.calender},
              ]}
              onPress={() => alert('Calender View')}>
              <Image
                source={icons.calender}
                style={{width: 25, height: 25}}></Image>
            </TouchableOpacity>
          </View>

          <StatusTask
            type="To Do"
            now={todo.length}
            completed={t.length}
            icon={icons.todo}
            navigation={navigation}
          />
          <StatusTask
            type="In progress"
            now={inProgress.length}
            completed={i.length}
            icon={icons.inProgress}
            bgColor={bgColor.inProgress}
            navigation={navigation}
          />
          <StatusTask
            type="Done"
            icon={icons.done}
            now={done.length}
            completed={d.length}
            bgColor={bgColor.done}
            navigation={navigation}
          />
        </View>

        <View style={styles.container_folderTask}>
          <Text style={{fontSize: 25}}>Active Projects</Text>
          <FlatList
            data={folder}
            numColumns={2}
            renderItem={(item) => {
              const category_name = item.item.category;

              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FolderTask', {
                      data: item.item.task,
                      category_name: category_name,
                    });
                  }}
                  style={{flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.folderTask,
                      {
                        backgroundColor:
                          item.index % 2 == 0
                            ? bgColor.calender
                            : bgColor.red_folder,
                      },
                    ]}>
                    <Text style={styles.text_folder_task}>{category_name}</Text>
                    <Text style={styles.text_hour_folder_task}>
                      {category_name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
