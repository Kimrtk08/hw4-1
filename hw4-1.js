let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// ฟังก์ชันเพิ่มค่าใช้จ่าย
function addExpense(expenseData) {
    expenses.push(expenseData);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// ฟังก์ชันดึงรายการตามวันที่
function getExpensesByDate(date) {
    return expenses.filter(expense => expense.date === date);
}

// ฟังก์ชันคำนวณยอดรวมตามหมวดหมู่
function calculateTotalByCategory(category) {
    return expenses
        .filter(expense => expense.category === category)
        .reduce((sum, expense) => sum + expense.amount, 0);
}

// ฟังก์ชันสร้างรายงานค่าใช้จ่ายรายเดือน
function generateMonthlyReport() {
    const report = {};

    expenses.forEach(expense => {
        const month = expense.date.substring(0, 7); // ตัดเอาแค่ "YYYY-MM"
        if (!report[month]) {
            report[month] = 0;
        }
        report[month] += expense.amount;
    });

    return report;
}

addExpense({ id: "1", title: "ข้าวเช้า", amount: 50, category: "food", date: "2025-01-31" });
addExpense({ id: "2", title: "ค่ารถ", amount: 20, category: "transport", date: "2025-01-31" });

console.log(getExpensesByDate("2025-01-31"));
console.log(calculateTotalByCategory("food"));
console.log(generateMonthlyReport());
