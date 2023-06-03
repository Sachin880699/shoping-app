import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import MasonryList from "reanimated-masonry-list"

const CATEGORIES = [
    "Clothing",
    "Shoes",
    "Accessories",
    "Accessories 1",
    "Accessories 2",
    "Accessories 2",
    "Accessories 2",
    
]

const AVATAR_URL = "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
const HomeScreen = () => {
    const { colors } = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0)
    return (
        <ScrollView>
            <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
                {/* {This is header section} */}
                <View style={{
                    paddingHorizontal: 24,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                    paddingVertical: 24
                }} >
                    <Image source={{ uri: AVATAR_URL }} style={{ width: 52, aspectRatio: 1, borderRadius: 52 }} resizeMode='cover' />

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8, color: colors.text }} numberOfLines={1}>Hi, Sachinn 👋</Text>
                        <Text style={{ color: colors.text, opacity: 0.75 }} numberOfLines={1}>Discover fashion that suit your style</Text>
                    </View>
                    <TouchableOpacity style={{
                        width: 52, aspectRatio: 1, alignItems: "center",
                        justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border,
                    }}>
                        <Icons name="bell" style={{ fontSize: 24 }} color={colors.text} />
                    </TouchableOpacity>
                </View>

                {/* {Search section} */}

                <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 12 }}>
                    <TouchableOpacity style={{
                        flex: 1, height: 52, borderRadius: 52, borderWidth: 1, borderColor: colors.border,
                        alignItems: "center",
                        paddingHorizontal: 24,
                        flexDirection: "row",
                        gap: 12,
                    }}>
                        <Icons name="search-web" size={24} color={colors.text} style={{ opacity: 0.5 }} />
                        <Text style={{ flex: 1, fontSize: 16, color: colors.text, opacity: 0.5 }}>Search</Text>


                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 52, aspectRatio: 1, alignItems: "center",
                        justifyContent: "center", borderRadius: 52,
                        backgroundColor: colors.primary
                    }}>
                        <Icons name="tune" style={{ fontSize: 24 }} color={colors.background} />
                    </TouchableOpacity>
                </View>

                {/* Grid Collection */}


                <View style={{ paddingHorizontal: 24 }}>
                    {/* Title Bar */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: "800" }}>New Collections</Text>
                        <TouchableOpacity>
                            <Text>See All</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        height: 200,
                        gap: 12
                    }}>
                        {/* Card */}
                        <Card />
                        <View style={{ flex: 1, gap: 12 }}>

                            <Card />
                            <Card />

                        </View>

                    </View>
                </View>

                {/* Categories Section */}
                <FlatList data={CATEGORIES}
                 horizontal 
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={{
                    paddingHorizontal:16,
                    gap:12,
                 }}
                renderItem={({ item,index}) => {
                    const  isSelected = categoryIndex === index;


                    return(
                        <TouchableOpacity onPress={()=>setCategoryIndex(index)} 
                        style={{
                            backgroundColor: isSelected ? colors.primary : colors.card,
                            paddingHorizontal:24,
                            paddingVertical:16,
                            borderRadius:100,
                            borderWidth: isSelected ? 0 : 1,
                            borderColor: colors.border
                        }}>
                        <Text style={{
                            color:isSelected ? colors.background : colors.text,
                            fontWeight:"600",
                            fontSize:16
                        }}>{item}</Text>
                    </TouchableOpacity>
                    )
                }}
                 />

                 {/* Mesonary  */}
                 <MasonryList
                    data={[1,2,3,54,7,5]}
                    keyExtractor={(item): string => item.id}
                    numColumns={2}
                    contentContainerStyle={{paddingHorizontal:24}}
                    
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,i}) => 
                    <View style={{
                        aspectRatio:i===0 ? 1:2/3,
                         position:"relative",
                         marginTop:12,
                         }}>
                        <Image source ={{
                            uri:"https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        }} resizeMode='cover' borderRadius={20}
                        style={StyleSheet.absoluteFill}
                        />
                    </View> }
                    onEndReachedThreshold={0.1}
                    />


            </SafeAreaView>
        </ScrollView>
    )
}

export default HomeScreen


const Card = () => {
    return (
        <View style={{ flex: 1, position: "relative", overflow: "hidden", borderRadius: 24 }}>
            <Image source={{ uri: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" }} resizeMode='cover'
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
            />

            <View style={{
                position: "absolute", left: 16, top: 16, paddingHorizontal: 16,
                paddingVertical: 10, backgroundColor: "rgba(0,0,0,0.25)",
                borderRadius: 1000,
            }}>
                <Text style={{ fontSize: 14, fontWeight: "600", color: "#fff" }}>$130</Text>
            </View>

        </View>
    )
}