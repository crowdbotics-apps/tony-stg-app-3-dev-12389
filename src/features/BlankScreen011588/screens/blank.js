import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {
    TextInput_7: "",
    TextInput_9: "",
    DateTimePicker_11: new Date("10/03/2020"),
    TextInput_13: "",
    Switch_15: true,
    CheckBox_19: true,
    CheckBox_21: true
  }
  render = () => (
    <View style={styles.View_1}>
      <Button
        title="Press me!"
        color="#3366FF"
        style={styles.Button_3}
        onPress={() => alert("Pressed!")}
      />
      <Text style={styles.Text_5}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        editable={true}
        keyboardType="numeric"
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_11}
        date={this.state.DateTimePicker_11}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_11: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        style={styles.TextInput_13}
        value={this.state.TextInput_13}
        onChangeText={nextValue => this.setState({ TextInput_13: nextValue })}
      />
      <Switch
        activeColor="#409EFF"
        inactiveColor="#C0CCDA"
        disabled={false}
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_15}
        value={this.state.Switch_15}
        onValueChange={nextChecked => this.setState({ Switch_15: nextChecked })}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        step={1}
        disabled={false}
        maximumTrackTintColor="#E4E7ED"
        minimumTrackTintColor="#3366FF"
        thumbTintColor="#3366FF"
        style={styles.Slider_17}
      />
      <CheckBox
        title="Checkbox"
        disabled={false}
        containerStyle={styles.CheckBox_19}
        checked={this.state.CheckBox_19}
        onPress={nextChecked => this.setState({ CheckBox_19: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        disabled={false}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_21}
        checked={this.state.CheckBox_21}
        onPress={nextChecked => this.setState({ CheckBox_21: nextChecked })}
      />
      <Icon iconFont="FontAwesome Icons" name="star" style={styles.Icon_23} />
      <Image
        resizeMode="cover"
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/Simulator_Screen_Shot_-_iPhone_6s_-_2020-03-09_at_05.09.52_31n5e5L.png"
        }}
        style={styles.Image_25}
      />
    </View>
  )
}

_Blank = withStyles(__Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
