//---------------------- ฟังชันบวก ----------------------//
function calculateSum_Plus() {
    var input_Plus1 = document.getElementById('input_Plus1').value;
    var input_Plus2 = document.getElementById('input_Plus2').value;

    if (input_Plus1 === "" || input_Plus2 === "" || isNaN(input_Plus1) || isNaN(input_Plus2)) {
        document.getElementById('result_Plus').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Plus1) + parseFloat(input_Plus2);
    document.getElementById('result_Plus').innerHTML = sum.toFixed(2);
}

function clearInputs_Plus() {
    document.getElementById('input_Plus1').value = '';
    document.getElementById('input_Plus2').value = '';
    document.getElementById('result_Plus').innerHTML = '';
}
//-----------------------------------------------------//
//---------------------- ฟังชันลบ ----------------------//
function calculateSum_Minus() {
    var input_Minus1 = document.getElementById('input_Minus1').value;
    var input_Minus2 = document.getElementById('input_Minus2').value;

    if (input_Minus1 === "" || input_Minus2 === "" || isNaN(input_Minus1) || isNaN(input_Minus2)) {
        document.getElementById('result_Minus').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Minus1) - parseFloat(input_Minus2);
    document.getElementById('result_Minus').innerHTML = sum.toFixed(2);
}

function clearInputs_Minus() {
    document.getElementById('input_Minus1').value = '';
    document.getElementById('input_Minus2').value = '';
    document.getElementById('result_Minus').innerHTML = '';
}
//-----------------------------------------------------//
//---------------------- ฟังชันคูณ ----------------------//
function calculateSum_Multiplied() {
    var input_Multiplied1 = document.getElementById('input_Multiplied1').value;
    var input_Multiplied2 = document.getElementById('input_Multiplied2').value;

    if (input_Multiplied1 === "" || input_Multiplied2 === "" || isNaN(input_Multiplied1) || isNaN(input_Multiplied2)) {
        document.getElementById('result_Multiplied').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Multiplied1) * parseFloat(input_Multiplied2);
    document.getElementById('result_Multiplied').innerHTML = sum.toFixed(2);
}

function clearInputs_Multiplied() {
    document.getElementById('input_Multiplied1').value = '';
    document.getElementById('input_Multiplied2').value = '';
    document.getElementById('result_Multiplied').innerHTML = '';
}
//-----------------------------------------------------//
//---------------------- ฟังชันหาร ----------------------//
function calculateSum_Divide() {
    var input_Divide1 = document.getElementById('input_Divide1').value;
    var input_Divide2 = document.getElementById('input_Divide2').value;

    if (input_Divide1 === "" || input_Divide2 === "" || isNaN(input_Divide1) || isNaN(input_Divide2)) {
        document.getElementById('result_Divide').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Divide1) / parseFloat(input_Divide2);
    document.getElementById('result_Divide').innerHTML = sum.toFixed(2);
}

function clearInputs_Divide() {
    document.getElementById('input_Divide1').value = '';
    document.getElementById('input_Divide2').value = '';
    document.getElementById('result_Divide').innerHTML = '';
}
//-----------------------------------------------------//
//---------------------- ฟังชันคลิกปุ่ม คำนวนไว ----------------------//
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('calculateLink').addEventListener('click', (e) => {
        e.preventDefault();

        let input_CalLink = prompt("กรุณากรอกเลขที่ต้องการคำนวน: ");

        // ตรวจสอบว่าผู้ใช้กรอกข้อมูลหรือไม่
        if (input_CalLink === null || input_CalLink.trim() === "") {
            alert("คุณยังไม่ได้กรอกข้อมูล");
            return; // หยุดการทำงานของฟังก์ชัน
        }

        try {
            let result = eval(input_CalLink);
            // ตรวจสอบว่าผลลัพธ์เป็นตัวเลขหรือไม่
            if (!isNaN(result)) {
                alert("ผลลัพธ์คือ: " + result.toFixed(2));
            } else {
                throw new Error("ข้อมูลไม่ถูกต้อง"); // โยนข้อผิดพลาดหากผลลัพธ์ไม่ใช่ตัวเลข
            }
        } catch (e) {
            // ตรวจสอบประเภทข้อผิดพลาดและแสดงข้อความตามเงื่อนไข
            if (e instanceof SyntaxError || e instanceof ReferenceError) {
                alert("คุณกรอกข้อมูลผิด");
            } else {
                alert(e.message); // แสดงข้อความข้อผิดพลาดอื่นๆ ที่อาจเกิดขึ้น
            }
        }
    });
});
//----------------------------------------------------------------//