import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container0}>
          <View style={styles.container6}>
            <Image style={styles.imagen2} source={require('./images/1.jpg')} />
          </View>
          <View style={styles.container7}>
            <View style={styles.container8}>
              <View style={styles.datos}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  Posts
                </Text>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  20
                </Text>
              </View>
              <View style={styles.datos1}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  Followers 110304
                </Text>
              </View>
              <View style={styles.datos2}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  following 1103
                </Text>
              </View>
            </View>

            <View style={styles.boton}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
                Edit Profile
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.container2}>
          <View style={styles.container5}>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
                }}
              />
            </View>
          </View>

          <View style={styles.container5}>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
                }}
              />
            </View>
          </View>

          <View style={styles.container5}>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
                }}
              />
            </View>
            <View style={styles.container4}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.container3}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'stretch',
    margin: 2,
  },
  container1: {
    flex: 0.3,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 2,
  },
  container2: {
    flex: 0.41,
    margin: 10,
  },
  container3: {
    flex: 0.29,
    margin: 2,
  },
  container4: {
    flex: 1,
    margin: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container5: {
    flex: 1,
    flexDirection: 'row',
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  container0: {
    flex: 0.3,
    flexDirection: 'row',
    margin: 2,
  },
  container6: {
    flex: 1,
    margin: 2,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container7: {
    flex: 2,
    flexDirection: 'column',
    margin: 2,
    marginRight: 0,
    paddingBottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container8: {
    flexDirection: 'row',
    width: 240,
    height: 50,
    margin: 2,
    justifyContent: 'flex-end',
  },
  imagen2: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 1000,
  },
  boton: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 26,
    margin: 3,
    opacity: 0.3,
  },
  datos: {
    flex: 0.2,
    justifyContent: 'center',
  },
  datos1: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  datos2: {
    flex: 0.4,
    justifyContent: 'center',
  },
});
