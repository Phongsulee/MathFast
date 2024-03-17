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
//################################################################//
//-------------------------- ฟังชันบวก ----------------------------//
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
//-----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันลบ ----------------------------//
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
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันคูณ ---------------------------//
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
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาร ---------------------------//
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
//----------------------------------------------------------------//
//################################################################//
//---------------------- ฟังชันหาพื้นที่วงกลม ------------------------//
function calculateSum_SphericalSpace() {
    var input_SphericalSpace = document.getElementById('input_SphericalSpace').value;

    if (input_SphericalSpace === "" || isNaN(input_SphericalSpace)){
        document.getElementById('result_SphericalSpace').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = 3.14 * (parseFloat(input_SphericalSpace) ** 2);
    document.getElementById('result_SphericalSpace').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_SphericalSpace() {
    document.getElementById('input_SphericalSpace').value = '';
    document.getElementById('result_SphericalSpace').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//---------------------- ฟังชันหาเส้นรอบวงกลม -----------------------//
function calculateSum_CircumferenceCircle() {
    var input_CircumferenceCircle = document.getElementById('input_CircumferenceCircle').value;

    if (input_CircumferenceCircle === "" || isNaN(input_CircumferenceCircle)){
        document.getElementById('result_CircumferenceCircle').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = 2 * 3.14 * parseFloat(input_CircumferenceCircle);
    document.getElementById('result_CircumferenceCircle').innerHTML = sum.toFixed(2) + " เซนติเมตร(cm.)";
}

function clearInputs_CircumferenceCircle() {
    document.getElementById('input_CircumferenceCircle').value = '';
    document.getElementById('result_CircumferenceCircle').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สามเหลี่ยมใด  ---------------------------//
function calculateSum_AnyTriangle() {
    var input_AnyTriangle1 = document.getElementById('input_AnyTriangle1').value;
    var input_AnyTriangle2 = document.getElementById('input_AnyTriangle2').value;

    if (input_AnyTriangle1 === "" || input_AnyTriangle2 === "" || isNaN(input_AnyTriangle1) || isNaN(input_AnyTriangle2)) {
        document.getElementById('result_AnyTriangle').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = (1/2) * parseFloat(input_AnyTriangle1) * parseFloat(input_AnyTriangle2);
    document.getElementById('result_AnyTriangle').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_AnyTriangle() {
    document.getElementById('input_AnyTriangle1').value = '';
    document.getElementById('input_AnyTriangle2').value = '';
    document.getElementById('result_AnyTriangle').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//---------------------- ฟังชันหาพื้นที่สามด้านเท่า -----------------------//
function calculateSum_ThreeSided() {
    var input_ThreeSided = document.getElementById('input_ThreeSided').value;

    if (input_ThreeSided === "" || isNaN(input_ThreeSided)){
        document.getElementById('result_ThreeSided').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    // สูตรการหาพื้นที่สามด้านเท่า = (√3/4) × ด้าน²
    var sum = ((Math.sqrt(3) / 4) * parseFloat(Math.pow(input_ThreeSided, 2)));     
    document.getElementById('result_ThreeSided').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_ThreeSided() {
    document.getElementById('inputThreeSided').value = '';
    document.getElementById('result_ThreeSided').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//---------------------- ฟังชันหาพื้นที่สี่เหลี่ยมจัตตุรัส -----------------------//
function calculateSum_Square() {
    var input_Square = document.getElementById('input_Square').value;

    if (input_Square === "" || isNaN(input_Square)){
        document.getElementById('result_Square').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Square) * parseFloat(input_Square);     
    document.getElementById('result_Square').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Square() {
    document.getElementById('inputSquare').value = '';
    document.getElementById('result_Square').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมผืนผ้า  ---------------------------//
function calculateSum_Rectangle() {
    var input_Rectangle1 = document.getElementById('input_Rectangle1').value;
    var input_Rectangle2 = document.getElementById('input_Rectangle2').value;

    if (input_Rectangle1 === "" || input_Rectangle2 === "" || isNaN(input_Rectangle1) || isNaN(input_Rectangle2)) {
        document.getElementById('result_Rectangle').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Rectangle1) * parseFloat(input_Rectangle2);
    document.getElementById('result_Rectangle').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Rectangle() {
    document.getElementById('input_Rectangle1').value = '';
    document.getElementById('input_Rectangle2').value = '';
    document.getElementById('result_Rectangle').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมด้านขนาน ---------------------------//
function calculateSum_Parallelogram() {
    var input_Parallelogram1 = document.getElementById('input_Parallelogram1').value;
    var input_Parallelogram2 = document.getElementById('input_Parallelogram2').value;

    if (input_Parallelogram1 === "" || input_Parallelogram2 === "" || isNaN(input_Parallelogram1) || isNaN(input_Parallelogram2)) {
        document.getElementById('result_Parallelogram').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Parallelogram1) * parseFloat(input_Parallelogram2);
    document.getElementById('result_Parallelogram').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Parallelogram() {
    document.getElementById('input_Parallelogram1').value = '';
    document.getElementById('input_Parallelogram2').value = '';
    document.getElementById('result_Parallelogram').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมขนมเปียกปูน ---------------------------//
function calculateSum_Rhombus() {
    var input_Rhombus1 = document.getElementById('input_Rhombus1').value;
    var input_Rhombus2 = document.getElementById('input_Rhombus2').value;

    if (input_Rhombus1 === "" || input_Rhombus2 === "" || isNaN(input_Rhombus1) || isNaN(input_Rhombus2)) {
        document.getElementById('result_Rhombus').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Rhombus1) * parseFloat(input_Rhombus2);
    document.getElementById('result_Rhombus').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Rhombus() {
    document.getElementById('input_Rhombus1').value = '';
    document.getElementById('input_Rhombus2').value = '';
    document.getElementById('result_Rhombus').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมขนมเปียกปูน ---------------------------//
function calculateSum_Rhombus() {
    var input_Rhombus1 = document.getElementById('input_Rhombus1').value;
    var input_Rhombus2 = document.getElementById('input_Rhombus2').value;

    if (input_Rhombus1 === "" || input_Rhombus2 === "" || isNaN(input_Rhombus1) || isNaN(input_Rhombus2)) {
        document.getElementById('result_Rhombus').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = parseFloat(input_Rhombus1) * parseFloat(input_Rhombus2);
    document.getElementById('result_Rhombus').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Rhombus() {
    document.getElementById('input_Rhombus1').value = '';
    document.getElementById('input_Rhombus2').value = '';
    document.getElementById('result_Rhombus').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมคางหมู ---------------------------//
function calculateSum_Trapezoid() {
    var input_Trapezoid1 = document.getElementById('input_Trapezoid1').value;
    var input_Trapezoid2 = document.getElementById('input_Trapezoid2').value;
    var input_Trapezoid3 = document.getElementById('input_Trapezoid3').value;

    if (input_Trapezoid1 === "" || input_Trapezoid2 === "" || input_Trapezoid3 === "" || isNaN(input_Trapezoid1) || isNaN(input_Trapezoid2) || isNaN(input_Trapezoid3)) {
        document.getElementById('result_Trapezoid').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = (1/2) * (parseFloat(input_Trapezoid1) + parseFloat(input_Trapezoid2)) * parseFloat(input_Trapezoid3);
    document.getElementById('result_Trapezoid').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Trapezoid() {
    document.getElementById('input_Trapezoid1').value = '';
    document.getElementById('input_Trapezoid2').value = '';
    document.getElementById('input_Trapezoid3').value = '';
    document.getElementById('result_Trapezoid').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมรูปว่าว ---------------------------//
function calculateSum_KiteShapedSquare() {
    var input_KiteShapedSquare1 = document.getElementById('input_KiteShapedSquare1').value;
    var input_KiteShapedSquare2 = document.getElementById('input_KiteShapedSquare2').value;

    if (input_KiteShapedSquare1 === "" || input_KiteShapedSquare2 === "" || isNaN(input_KiteShapedSquare1) || isNaN(input_KiteShapedSquare2)) {
        document.getElementById('result_KiteShapedSquare').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = (1/2) * (parseFloat(input_KiteShapedSquare1) * parseFloat(input_KiteShapedSquare2));
    document.getElementById('result_KiteShapedSquare').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_KiteShapedSquare() {
    document.getElementById('input_KiteShapedSquare1').value = '';
    document.getElementById('input_KiteShapedSquare2').value = '';
    document.getElementById('result_KiteShapedSquare').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//
//--------------------------- ฟังชันหาพื้นที่สี่เหลี่ยมด้านไม่เท่า ---------------------------//
function calculateSum_Trapezium() {
    var input_Trapezium1 = document.getElementById('input_Trapezium1').value;
    var input_Trapezium2 = document.getElementById('input_Trapezium2').value;
    var input_Trapezium3 = document.getElementById('input_Trapezium3').value;

    if (input_Trapezium1 === "" || input_Trapezium2 === "" || input_Trapezium3 === "" || isNaN(input_Trapezium1) || isNaN(input_Trapezium2) || isNaN(input_Trapezium3)) {
        document.getElementById('result_Trapezium').innerHTML = "คุณยังไม่ได้ป้อนตัวเลข";
        return;
    }

    var sum = (1/2) * (parseFloat(input_Trapezium1) * parseFloat(input_Trapezium2) * parseFloat(input_Trapezium3));
    document.getElementById('result_Trapezium').innerHTML = sum.toFixed(2) + " ตาราง เซนติเมตร(cm²)";
}

function clearInputs_Trapezium() {
    document.getElementById('input_Trapezium1').value = '';
    document.getElementById('input_Trapezium2').value = '';
    document.getElementById('input_Trapezium3').value = '';
    document.getElementById('result_Trapezium').innerHTML = '';
}
//----------------------------------------------------------------//
//################################################################//