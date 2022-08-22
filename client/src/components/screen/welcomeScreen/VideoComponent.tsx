import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import { Video } from 'expo-av'
import React, { useRef, useState } from 'react'

export default function VideoComponent() {
    const video = useRef<any>(null)
    const [status, setStatus] = useState<any>({})
    const coverVideo: any = 'contain'

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Video
                    ref={video}
                    resizeMode={coverVideo}
                    style={styles.video}
                    source={require('@videos/intro.mp4')}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    isLooping
                />

                <TouchableOpacity
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                    style={styles.buttonPlayVideo}
                >
                    <Image
                        style={[styles.imageButtonPlayVideo, { opacity: status.isPlaying ? 0 : 1 }]}
                        source={require('@images/playvideo.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageButtonPlayVideo: {
        width: 45,
        height: 45
    },
    buttonPlayVideo: {
        position: 'absolute',
    },
    video: {
        width: '100%',  //260
        height: '100%',  // 150
        borderWidth: 5,
        borderColor: '#FFC400',
        borderRadius: 15,
    },
    videoContainer: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 260,
        height: 157,
        padding: 1,
        backgroundColor: '#711F1F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'white',
    },
    container: {
        width: 263,  //270
        height: 160, // 260
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
    },
})
