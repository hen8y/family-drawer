import { StyleSheet, TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Iconify } from "react-native-iconify";
import Animated from "react-native-reanimated";

export default function PrivateKey({
    iconScale,
    detailSlide,
    setVisibleSection,
    setIsModalVisible,
}: {
    iconScale: any;
    visibleSection: string | null;
    detailSlide: any;
    setIsModalVisible: (visible: boolean) => void;
    setVisibleSection: (visible: string | null) => void;
}) {
    return (
        <Animated.View style={[styles.container, detailSlide]}>
            <View>
                <View style={[styles.spaceRow]}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            justifyContent: "center",
                        }}
                    >
                        <Animated.View style={iconScale}>
                            <Iconify icon="token:card" size={35} color="#aaa" />
                        </Animated.View>
                        <Text style={styles.title}>Private Key</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.center, styles.cancelIcon]}
                        onPress={() => setIsModalVisible(false)}
                    >
                        <Iconify icon="iconoir:cancel" size={25} color="#333" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minus minima veniam impedit porro.
                    </Text>
                </View>
            </View>

            <View style={styles.hr} />

            <View>
                <View
                    style={{
                        gap: 10,
                        marginBottom: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Iconify
                            icon="gravity-ui:shield"
                            size={15}
                            color="#aaa"
                        />
                        <Text style={styles.text}>
                            Keep your key private and safe
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Iconify
                            icon="solar:shield-bold"
                            size={15}
                            color="#aaa"
                        />
                        <Text style={styles.text}>
                            Don't share your key with anyone
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Iconify icon="typcn:info" size={15} color="#aaa" />
                        <Text style={styles.text}>
                            If you lose your key, you can't recover it
                        </Text>
                    </View>
                </View>

                <View style={styles.spaceRow}>
                    <Pressable
                        style={styles.lightButton}
                        onPress={() => setVisibleSection(null)}
                    >
                        <Text style={styles.lightButtonText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Iconify
                            icon="mynaui:face-id-solid"
                            size={20}
                            color="#fff"
                        />
                        <Text style={styles.buttonText}>Reveal Key</Text>
                    </Pressable>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        padding: 25,
        borderRadius: 30,
        height: "100%",
        justifyContent: "space-between",
        transformOrigin: "center",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    cancelIcon: {
        backgroundColor: "#eee",
        width: 40,
        height: 40,
        borderRadius: 90,
    },
    spaceRow: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        color: "#aaa",
        marginTop: 10,
        lineHeight: 27,
    },
    text: {
        fontSize: 20,
        color: "#aaa",
        lineHeight: 27,
    },
    hr: {
        height: 1,
        backgroundColor: "#eee",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 16,
        width: "47%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 90,
        gap: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    lightButton: {
        backgroundColor: "#ddd",
        paddingVertical: 16,
        width: "47%",
        alignItems: "center",
        borderRadius: 90,
    },
    lightButtonText: {
        color: "#333",
        fontSize: 17,
        fontWeight: "bold",
    },
});
