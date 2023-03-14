import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageExpense({route}) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    return (
    <Text></Text>
    );
}

export default ManageExpense;