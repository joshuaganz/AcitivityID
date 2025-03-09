import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import styles from "../app/styles";

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/ctuLogo.png")}
            style={styles.CTULogo}
          />
          <Image
            source={require("../assets/images/aseanLogo.png")}
            style={styles.aseanLogo}
          />
        </View>

        <View style={styles.headerTextContainer}>
          <Text style={styles.rop}>Republic of the Philippines</Text>
          <Text style={styles.uniName}>CEBU TECHNOLOGICAL{'\n'}UNIVERSITY</Text>
          <Text style={styles.campus}>
            Main Campus: M.J. Cuenco Avenue{'\n'}corner R. Palma St.,Cebu City
          </Text>
        </View>
      </View>

      <View style={styles.centerCon}>
        <View style={styles.idFaceCon}>
          <Image
            source={require("../assets/images/idFace.png")}
            style={styles.idFace}
          />
        </View>

        

        <View style={styles.courseContainer}>
          <Text style={styles.name}>KATRINA SHIN D. CABALLES</Text>
          <Text style={styles.courseCode}>BSIT</Text>
          <View style={styles.line} />
          <Text style={styles.courseLabel}>COURSE</Text>
          <Text style={styles.idLabel}>
            ID No.: <Text style={styles.idNumber}>1331217 </Text>
          </Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
          <Image
            source={require("../assets/images/tuvPic.png")}
            style={styles.tuvImage}
          />
          <Text style={styles.tuvText}>
            CTU IS ISO 9001:2015 certified by {'\n'} TUV Rheinland Philippines, Inc
          </Text>
      </View>
    </ImageBackground>
  );
}