<template>
    <div>
        <h1>Expenses for the firm</h1>
        <h2> Add Expense</h2>
        <input v-model="ExpensesForm.date" class="input" type="date" placeholder="Date" /><br />
        <input v-model.number="ExpensesForm.jobId" class="input" type="number" placeholder="Job Id" /><br />
        <input v-model="ExpensesForm.text" class="input" type="text" placeholder="Text" /><br />
        <input v-model.number="ExpensesForm.amount" class="input" type="number" placeholder="Amount" /><br />
        <button v-on:click="AddExpense" class="create">Add Expense</button> <br />


        <hr />
        <hr />
        <button v-on:click="load">Show All Expenses</button>
        <table width="100%">
            <thead>
                <tr>
                    <th>ExpenseId</th>
                    <th>ModelID</th>
                    <th>JobId</th>
                    <th>Date</th>
                    <th>Text</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tr v-for="(expense, index) in Expenses" v-bind:key="index">
                <td>{{expense.efExpenseId}}</td>
                <td>{{expense.modelId}}</td>
                <td>{{expense.jobId}}</td>
                <td>{{expense.date}}</td>
                <td>{{expense.text}}</td>
                <td>{{expense.amount}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: "ExpensesComponent",
        data: function () {
            return {
                ExpensesForm: {
                    date: "",
                    jobId: null,
                    text: "",
                    amount: null
                },
                Expenses: []
            }

        },
        props: {
            msg: String,
        },
        methods: {
           async load() {
                var url = "https://localhost:44368/api/Expenses";
                try {
                  await fetch(url, {
                        method: 'GET',
                        //body: JSON.stringify(this.form), // data is saved in form
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(response => response.json()).then(data =>
                    {
                        this.Expenses = data;
                    })
                }
                catch (error) {
                    alert("You dont have permission for this");
                }
            },
            AddExpense()
            {
                var url = "https://localhost:44368/api/Expenses/";
                try {
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(this.ExpensesForm), // data is saved in form
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        }
                    }).then(responseJson => {
                        this.response = responseJson;
                        if (this.response.status >= 200 && this.response.status < 300) alert("Successfully added expense to job");
                        else alert("Error")
                    })
                }
                catch (error) {
                    alert('Something bad happened ' + error);
                }
            }
        },

    };
</script>
