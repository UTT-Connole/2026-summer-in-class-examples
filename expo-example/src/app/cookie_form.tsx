import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import useIngredients from '../hooks/ingredients_hook';
import IngredientInput from '../components/ingredient_input';

export default function CookieForm() {

    const {
        ingredients,
        handleInputChange,
        handleReset,
        handleSubmit,
    } = useIngredients();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chocolate Chip Cookie Ingredients</Text>

      <IngredientInput
        label="Flour (cups)"
        placeholder="2.25"
        value={ingredients.flour}
        field="flour"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Butter (cups)"
        placeholder="1"
        value={ingredients.butter}
        field="butter"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Sugar (cups)"
        placeholder="0.75"
        value={ingredients.sugar}
        field="sugar"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Brown Sugar (cups)"
        placeholder="0.75"
        value={ingredients.brownSugar}
        field="brownSugar"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Corn Starch (cups)"
        placeholder="1.5"
        value={ingredients.cornStarch}
        field="cornStarch"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Eggs"
        placeholder="2"
        value={ingredients.eggs}
        field="eggs"
        keyboardType="number-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Vanilla Extract (tsp)"
        placeholder="1"
        value={ingredients.vanilla}
        field="vanilla"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Baking Soda (tsp)"
        placeholder="1"
        value={ingredients.bakingSoda}
        field="bakingSoda"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Salt (tsp)"
        placeholder="1"
        value={ingredients.salt}
        field="salt"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <IngredientInput
        label="Chocolate Chips (cups)"
        placeholder="2"
        value={ingredients.chocolateChips}
        field="chocolateChips"
        keyboardType="decimal-pad"
        onChange={handleInputChange}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#8B4513',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#999',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
