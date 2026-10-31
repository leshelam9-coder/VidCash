import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [videosWatched, setVideosWatched] = useState(0);

  const minimumWithdrawal = 50;
  const reward = 0.10;

  const watchVideo = () => {
    setBalance(previous => previous + reward);
    setVideosWatched(previous => previous + 1);

    Alert.alert(
      'VidCash Reward',
      'Demo reward of R0.10 added to your wallet!'
    );
  };

  const withdrawMoney = () => {
    if (balance < minimumWithdrawal) {
      Alert.alert(
        'Withdrawal',
        'You need at least R50.00 before requesting a withdrawal.'
      );
    } else {
      Alert.alert(
        'Withdrawal',
        'Your demo balance has reached the withdrawal minimum. Real payments are not connected yet.'
      );
    }
  };

  const progress = Math.min(
    (balance / minimumWithdrawal) * 100,
    100
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            Vid<Text style={styles.green}>Cash</Text>
          </Text>
          <Text style={styles.tagline}>
            WATCH • EARN • WITHDRAW
          </Text>
        </View>

        {/* WALLET */}
        <View style={styles.wallet}>
          <Text style={styles.label}>YOUR BALANCE</Text>

          <Text style={styles.balance}>
            R{balance.toFixed(2)}
          </Text>

          <Text style={styles.minimum}>
            Minimum withdrawal: R50.00
          </Text>
        </View>

        {/* WITHDRAWAL GOAL */}
        <View style={styles.card}>
          <Text style={styles.heading}>
            Your Withdrawal Goal
          </Text>

          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%` },
              ]}
            />
          </View>

          <Text style={styles.progressText}>
            {progress.toFixed(1)}% completed
          </Text>

          <Text style={styles.remaining}>
            R{Math.max(minimumWithdrawal - balance, 0).toFixed(2)}
            {' '}remaining
          </Text>

          <TouchableOpacity
            style={styles.withdrawButton}
            onPress={withdrawMoney}
          >
            <Text style={styles.buttonText}>
              WITHDRAW MONEY
            </Text>
          </TouchableOpacity>
        </View>

        {/* WATCH AND EARN */}
        <View style={styles.card}>
          <Text style={styles.heading}>
            ▶ WATCH & EARN
          </Text>

          <View style={styles.videoBox}>
            <Text style={styles.videoIcon}>▶</Text>
            <Text style={styles.videoText}>
              VidCash Reward Video
            </Text>
            <Text style={styles.videoSubtext}>
              Video player will be connected here
            </Text>
          </View>

          <Text style={styles.rewardText}>
            🎁 Complete a video to earn R0.10
          </Text>

          <TouchableOpacity
            style={styles.watchButton}
            onPress={watchVideo}
          >
            <Text style={styles.buttonText}>
              WATCH DEMO & EARN R0.10
            </Text>
          </TouchableOpacity>
        </View>

        {/* ACTIVITY */}
        <View style={styles.card}>
          <Text style={styles.heading}>
            YOUR ACTIVITY
          </Text>

          <View style={styles.activityRow}>
            <Text style={styles.activityLabel}>
              Videos watched
            </Text>
            <Text style={styles.activityValue}>
              {videosWatched}
            </Text>
          </View>

          <View style={styles.activityRow}>
            <Text style={styles.activityLabel}>
              Total earnings
            </Text>
            <Text style={styles.activityValue}>
              R{balance.toFixed(2)}
            </Text>
          </View>

          <View style={styles.activityRow}>
            <Text style={styles.activityLabel}>
              Reward per video
            </Text>
            <Text style={styles.activityValue}>
              R0.10
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            VidCash — Turn your screen time into value!
          </Text>
          <Text style={styles.footerSmall}>
            Watch • Earn • Withdraw
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080D0B',
  },

  header: {
    padding: 25,
    alignItems: 'center',
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },

  green: {
    color: '#00E676',
  },

  tagline: {
    color: '#D4AF37',
    marginTop: 5,
    letterSpacing: 2,
  },

  wallet: {
    backgroundColor: '#123B27',
    margin: 15,
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00E676',
  },

  label: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  balance: {
    color: '#00E676',
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  minimum: {
    color: '#FFFFFF',
    fontSize: 13,
  },

  card: {
    backgroundColor: '#151D19',
    margin: 15,
    marginTop: 5,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#263B30',
  },

  heading: {
    color: '#00E676',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  progressBackground: {
    height: 12,
    backgroundColor: '#333333',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: 12,
    backgroundColor: '#00E676',
  },

  progressText: {
    color: '#FFFFFF',
    marginTop: 10,
  },

  remaining: {
    color: '#D4AF37',
    marginTop: 5,
  },

  withdrawButton: {
    backgroundColor: '#D4AF37',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#080D0B',
    fontWeight: 'bold',
    fontSize: 14,
  },

  videoBox: {
    height: 180,
    backgroundColor: '#263B30',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  videoIcon: {
    color: '#00E676',
    fontSize: 45,
  },

  videoText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },

  videoSubtext: {
    color: '#BBBBBB',
    fontSize: 12,
    marginTop: 5,
  },

  rewardText: {
    color: '#D4AF37',
    marginVertical: 18,
    textAlign: 'center',
  },

  watchButton: {
    backgroundColor: '#00E676',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#263B30',
  },

  activityLabel: {
    color: '#FFFFFF',
  },

  activityValue: {
    color: '#00E676',
    fontWeight: 'bold',
  },

  footer: {
    padding: 25,
    alignItems: 'center',
  },

  footerText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },

  footerSmall: {
    color: '#D4AF37',
    marginTop: 8,
  },
});
<like button>
<double claim Reward button>
<claim reward>
<home button down lift>
<video in the middlefeeds>
<profile down right> 
<notification pop ups>
<random ads> 
