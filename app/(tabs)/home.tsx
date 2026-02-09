import { Link } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./home.styles";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.name}>Athlete 👋</Text>
        </View>

        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.avatar}
        />
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>1,320</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </View>
      </View>

      {/* Programs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Programs</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <View style={styles.programGrid}>
        {programs.map((item, index) => (
          <Link key={index} href={"/(tabs)/media"} asChild>
            <TouchableOpacity style={styles.programCard}>
              <Image source={item.image} style={styles.programImage} />
              <View style={styles.programContent}>
                <Text style={styles.programCategory}>{item.category}</Text>
                <Text style={styles.programTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      {/* CTA */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaTitle}>Upgrade Your Training</Text>
        <Text style={styles.ctaDesc}>
          Get access to elite programs & coaches
        </Text>

        <TouchableOpacity style={styles.ctaBtn}>
          <Text style={styles.ctaText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const programs = [
  {
    category: "MEMBERSHIP",
    title: "Development Training / Club Teams",
    desc: "Skill development & team training",
    image: require("../../assets/images/p1.png"),
  },
  {
    category: "LEAGUE",
    title: "The Shootout League",
    desc: "Fun-focused competitive league",
    image: require("../../assets/images/p2.jpg"),
  },
  {
    category: "LEAGUE",
    title: "Junior Shootout League",
    desc: "For kids & beginners",
    image: require("../../assets/images/p3.png"),
  },
  {
    category: "LEAGUE",
    title: "Girls Shootout League",
    desc: "Girls-only league program",
    image: require("../../assets/images/p4.jpg"),
  },
  {
    category: "MEMBERSHIP",
    title: "Open Shooting",
    desc: "High school boys & girls",
    image: require("../../assets/images/p5.jpeg"),
  },
  {
    category: "PASS",
    title: "Single Day Pass",
    desc: "Train for a single day",
    image: require("../../assets/images/p6.png"),
  },
];
