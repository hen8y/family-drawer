import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import Animated from "react-native-reanimated";

export default function BaseModal({
    baseTopStyle,
    baseBottomStyle,
    setIsModalVisible,
    handleViewRecovery,
}: {
    baseTopStyle: any;
    baseBottomStyle: any;
    setIsModalVisible: (visible: boolean) => void;
    handleViewRecovery: () => void;
}) {
    return (
        <View
            style={{
                justifyContent: "space-between",
                height: "100%",
                padding: 25,
            }}
        >
            {/* View 1 */}
            <Animated.View style={baseTopStyle}>
                <View style={styles.spaceRow}>
                    <Text style={styles.title}>Icloud Backup</Text>
                    <TouchableOpacity
                        style={[styles.center, styles.cancelIcon]}
                        onPress={() => setIsModalVisible(false)}
                    >
                        <Iconify icon="iconoir:cancel" size={25} color="#333" />
                    </TouchableOpacity>
                </View>

                <View style={styles.hr} />
            </Animated.View>

            {/* View 2 */}
            <Animated.View style={[baseBottomStyle, { gap: 10 }]}>
                <TouchableOpacity
                    onPress={handleViewRecovery}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "#f9f9f9",
                        padding: 15,
                        borderRadius: 15,
                    }}
                >
                    <Iconify icon="solar:shield-bold" size={25} color="#222" />
                    <Text style={styles.infoText}>View Private Key</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleViewRecovery}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "#f9f9f9",
                        padding: 15,
                        borderRadius: 15,
                    }}
                >
                    <Iconify icon="bi:boxes" size={25} color="#222" />
                    <Text style={styles.infoText}>View Recovery Phrase</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "#f9f9f9",
                        padding: 15,
                        borderRadius: 15,
                    }}
                >
                    <Iconify icon="ri:stack-fill" size={25} color="#222" />
                    <Text style={styles.infoText}>View Backup group</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "#fff1f1",
                        padding: 15,
                        borderRadius: 15,
                    }}
                >
                    <Iconify icon="typcn:info" size={25} color="#ff3333" />
                    <Text style={[styles.infoText, { color: "#ff3333" }]}>
                        Remove Waller
                    </Text>
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 10,
    },
    infoText: {
        fontSize: 20,
        color: "#222",
        lineHeight: 27,
        fontWeight: "700",
    },
    hr: {
        height: 1,
        backgroundColor: "#eee",
        marginVertical: 20,
    },
});
