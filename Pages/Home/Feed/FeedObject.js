import React from "react"
import { Text, Image, Dimensions, View, StyleSheet } from "react-native"
import { Icon } from "react-native-elements"
import { IconButton } from "../../../Components"
import Entypo from "@expo/vector-icons/Entypo"
import { Button as Btn } from "react-native-elements"
import config from "../../../config"

export default class FeedObject extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.dims = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    }
  }

  componentDidMount() {
    console.log("image: " + JSON.stringify(this.props.post))
  }

  render() {
    let date = new Date(this.props.post.date)
    let user = this.props.user != null ? this.props.user : {}
    return (
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image
            source={{
              uri:
                "https://www.nationalgeographic.com/content/dam/photography/photos/000/000/6.ngsversion.1467942028599.adapt.1900.1.jpg",
            }}
            style={styles.profileImg}
          />
          <Text style={styles.profileName}>
            {user.firstName} {user.lastName}
          </Text>
          <View style={styles.optionsBtn}>
            <IconButton
              icon={
                <Entypo
                  name="dots-three-vertical"
                  size={20}
                  color={config.primaryColor}
                />
              }
            />
          </View>
        </View>
        <Image
          source={{
            uri: this.props.post.image,
          }}
          style={{ width: this.dims.width, height: this.dims.width }}
        />
        <View style={styles.descriptionView}>
          <Text style={styles.description}>
            <Text style={styles.descriptionStart}>
              {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </Text>{" "}
            - {this.props.post.description}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    borderBottomColor: "#707070",
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: config.secondaryColor,
  },
  topView: {
    margin: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 4,
  },
  profileName: {
    //color: config.primaryColor,
    fontSize: 17,
    fontWeight: "bold",

    color: config.textColor,
  },
  optionsBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 0,
    marginLeft: "auto",
  },
  descriptionView: {
    margin: 8,
  },
  description: {
    fontSize: 15,

    color: config.textColor,
  },
  descriptionStart: {
    fontWeight: "bold",
  },
})
