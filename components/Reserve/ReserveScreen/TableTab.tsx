import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Two from "./Chairs/Two";
import Four from "./Chairs/Four";
import Eight from "./Chairs/Eight";
import Counter from "./Chairs/Counter";
import useStore from "@/store/useStore";

const TableTab: React.FC = () => {
  const { selectedTableId, setSelectedTable } = useStore();

  const handleTableSelect = (tableId: number) => {
    setSelectedTable(tableId);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Table</Text>

      <View style={styles.floorPlan}>
        <View style={styles.tableRow}>
          <Two
            id={1}
            isSelected={selectedTableId === 1}
            handleTableSelect={handleTableSelect}
          />
          <Four
            id={2}
            isSelected={selectedTableId === 2}
            handleTableSelect={handleTableSelect}
          />
          <Two
            id={3}
            isSelected={selectedTableId === 3}
            handleTableSelect={handleTableSelect}
          />
        </View>
        <View style={styles.tableRow}>
          <Two
            id={4}
            isSelected={selectedTableId === 4}
            handleTableSelect={handleTableSelect}
          />
          <Four
            id={5}
            isSelected={selectedTableId === 5}
            handleTableSelect={handleTableSelect}
          />
          <Two
            id={6}
            isSelected={selectedTableId === 6}
            handleTableSelect={handleTableSelect}
          />
        </View>
        <View style={styles.tableRow}>
          <Two
            id={7}
            isSelected={selectedTableId === 7}
            handleTableSelect={handleTableSelect}
          />
          <Eight
            id={8}
            isSelected={selectedTableId === 8}
            handleTableSelect={handleTableSelect}
          />
          <Two
            id={9}
            isSelected={selectedTableId === 9}
            handleTableSelect={handleTableSelect}
          />
        </View>
        <View style={styles.tableRow}>
          <Four
            id={10}
            isSelected={selectedTableId === 10}
            handleTableSelect={handleTableSelect}
          />
          <Four
            id={11}
            isSelected={selectedTableId === 11}
            handleTableSelect={handleTableSelect}
          />
        </View>
        <View>
          <Counter />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f8f8",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  floorPlan: {
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});

export default TableTab;
