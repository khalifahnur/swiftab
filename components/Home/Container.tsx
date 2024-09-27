import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Restaurants from "@/components/Home/Restaurants";
import restaurants from "@/components/Data";
import NewSubHeader from "./NewSubHeader";
import Cuisine from "./Cuisine";

export default function Container() {
  return (
    <SectionList
      sections={restaurants}
      renderSectionHeader={({section})=>{
        return(
          <>
            <NewSubHeader headerTitle={section.Title} btnText={'More'}/>
            <Restaurants data={section.data} />
          </>
        )
      }}
      renderItem={({item,section})=>{
        return null  
      }}

      ListFooterComponent={({section})=><Cuisine  />}
      />  
  );
}

const styles = StyleSheet.create({});
