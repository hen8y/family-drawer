import BaseModal from "@/components/base-modal";
import PrivateKey from "@/components/private-key";
import Slider from "@react-native-community/slider";
import { useEffect, useState } from "react";
import { Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Family() {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [visibleSection, setVisibleSection] = useState<string | null>(null);
    const [shouldRender, setShouldRender] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(100);
    const [direction, setDirection] = useState<"translateX" | "translateY">("translateX");
    const sectionTranslate = useSharedValue(10);
    const baseTopTranslateY = useSharedValue(0);
    const iconScaleUp = useSharedValue(1);
    const baseBottomTranslateY = useSharedValue(100);
    const opacity = useSharedValue(0);

    useEffect(() => {
        const isShowing = visibleSection !== null;

        if (isShowing) {
            setShouldRender(true);
            iconScaleUp.value = withTiming(1);
            baseTopTranslateY.value = withTiming(-50);
            baseBottomTranslateY.value = withTiming(50);
            sectionTranslate.value = withTiming(0);
            opacity.value = withTiming(1);
        } else {
            iconScaleUp.value = withTiming(0.02);
            baseTopTranslateY.value = withTiming(0, { duration });
            baseBottomTranslateY.value = withTiming(0, { duration });
            sectionTranslate.value = withTiming(direction === "translateX" ? 100 : 10, { duration: 100 }, (finished) => {
                if (finished) runOnJS(setShouldRender)(false);
            });
            opacity.value = withTiming(0.5);
        }
    }, [visibleSection]);

    const iconScale = useAnimatedStyle(() => ({
        transform: [{ scale: iconScaleUp.value }],
    }));

    const detailSlide = useAnimatedStyle(() => ({
        transform:
            direction === "translateX"
                ? [{ translateX: sectionTranslate.value }]
                : [{ translateY: -sectionTranslate.value }],
        opacity: opacity.value,
    }));

    const baseTopStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: baseTopTranslateY.value }],
    }));

    const baseBottomStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: baseBottomTranslateY.value }],
    }));

    const handleViewRecovery = () => {
        setVisibleSection("privateKey");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        setIsModalVisible(true);
                        setTimeout(() => {
                            setVisibleSection(null);
                        }, 50);
                    }}
                >
                    <View
                        style={{
                            paddingVertical: 15,
                            paddingHorizontal: 30,
                            backgroundColor: "#111",
                            borderRadius: 90,
                        }}
                    >
                        <Text style={{ color: "white" }}>Open Modal</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.spaceRow}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Direction
                    </Text>
                    <Switch
                        value={direction === "translateX"}
                        onValueChange={() => setDirection(direction === "translateX" ? "translateY" : "translateX")}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        Animation Speed: {(((duration) / 999) * 5).toFixed(1)} seconds
                    </Text>
                    <Slider
                        value={duration}
                        onValueChange={(value) => setDuration(value)}
                        style={{ width: 200, height: 40 }}
                        minimumValue={100}
                        maximumValue={999}
                    />
                </View>
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    activeOpacity={1}
                    onPress={() => setIsModalVisible(false)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={(e) => e.stopPropagation()}
                        style={[styles.center, { flex: 1 }]}
                    >
                        <View style={styles.modalContainer}>

                            {/* Base Modal View */}

                            <BaseModal
                                setIsModalVisible={setIsModalVisible}
                                handleViewRecovery={handleViewRecovery}
                                baseTopStyle={baseTopStyle}
                                baseBottomStyle={baseBottomStyle}
                            />

                            {/* Section Modal */}
                            {shouldRender && (
                                <PrivateKey
                                    iconScale={iconScale}
                                    visibleSection={visibleSection}
                                    detailSlide={detailSlide}
                                    setIsModalVisible={setIsModalVisible}
                                    setVisibleSection={setVisibleSection}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 0,
        borderRadius: 30,
        width: 400 * 0.9,
        height: 400,
        position: "absolute",
        bottom: 40,
        overflow: "hidden",
    },
    spaceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
        width: 200,
    },
});
