import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';

import { styles } from './styles';
import { Placing } from '../../components/Placing';
import { api } from '../../services/api';

interface UserData {
  id: string;
  name: string;
  avatar: {
    url: string;
  };
  level: {
    level: number;
    experience: number;
    currentExperience: number;
    challengesCompleted: number;
  }
}

export function Leaderboard() {
  const [ users, setUsers ] = useState<UserData[]>([]);
  const [ page, setPage ] = useState(1);
  const [loading, setLoading ] = useState(false);
  const [ loadedAll, setLoadedAll ] = useState(false);

  const userWithExperience = users.filter(user => {
    if(user.level.experience) {
      return user;
    }
  })

  const usersSorted = userWithExperience.sort(function(a,b) {
    if (a.level.experience && b.level.experience) {
      if(a.level.experience < b.level.experience) return 1;
      if (a.level.experience > b.level.experience) return -1;
    } else return 0;
    return 0;
  })

  useEffect(() => {
    (async () => {
      await api.get(`/users`).then(response => {
        setUsers(response.data)
      });
    })();
  }, [users]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Leaderboard</Text>
        <View style={styles.header}>
          <View style={styles.wrapper}>
            <Text style={styles.textFirst}>POSIÇÃO</Text>
            <Text style={styles.text}>USUÁRIO</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.textFirst}>DESAFIOS</Text>
            <Text style={styles.text}>EXPERIÊNCIA</Text>
          </View>
        </View>
        <View style={styles.placing}>
          {/* {
            usersSorted.map((user, index) => {
              return (
                <Placing
                  key={user.id}
                  name={user.name}
                  level={user.level.level}
                  experience={user.level.experience}
                  challengesCompleted={user.level.challengesCompleted}
                  avatar={user.avatar.url}
                  position={index + 1}
                />
              )
            })
          } */}

          <FlatList 
            data={usersSorted}
            renderItem={({ item, index }) => (
              <Placing
                key={item.id}
                name={item.name}
                level={item.level.level}
                experience={item.level.experience}
                challengesCompleted={item.level.challengesCompleted}
                avatar={item.avatar.url}
                position={index + 1}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          
        </View>
      </View>
    </ScrollView>
  )
}