function main() {
    var diemChuan = document.querySelector("#num").value ; 
    var khuVuc = document.querySelector("#location").value ; 
    var doiTuong = document.querySelector("#object").value ; 
    var diemThuNhat = document.querySelector("#num1").value ;
    var diemThuHai = document.querySelector("#num2").value ;
    var diemThuBa = document.querySelector("#num3").value ;
    console.log(diemChuan,khuVuc,doiTuong,diemThuNhat,diemThuHai,diemThuBa)
    
    var sum = Number(diemThuNhat) + Number(diemThuHai) + Number(diemThuBa) + Number(LocationPlus(khuVuc)) + Number(ObjectPlus(doiTuong))
    console.log(sum)

    
    // Nếu 1 trong 3 môn có điểm 0 , rớt ngay lập tức
    if(diemThuNhat == 0 || diemThuHai ==0 || diemThuBa == 0 ) {
        document.querySelector("#txtNum").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    } // Điều kiện để hiện kết quả đậu hay rớt
    else if(sum < diemChuan) {
        document.querySelector("#txtNum").innerHTML = "Bạn đã rớt. " + "Tổng điểm là : " + sum
    } else {
        document.querySelector("#txtNum").innerHTML = "Bạn đã đậu. " + "Tổng điểm là : " + sum
    }
}
document.querySelector("#btnNum").onclick = main ;

// Khai báo hàm Điểm cộng khu vực
function LocationPlus(khuVuc) {
    var diemCongKhuVuc  ; 
    if (khuVuc == 0) {
        diemCongKhuVuc = 0 ;
    } else if(khuVuc == "A") {
        diemCongKhuVuc = 2 ;
    } else if(khuVuc == "B") {
        diemCongKhuVuc = 1 ;
    } else {
        diemCongKhuVuc = 0.5 ;
    }
    return diemCongKhuVuc ;
}

// khai báo hàm Điểm cộng đối tượng
function ObjectPlus(doiTuong){
    var diemCongDoiTuong ;
    if (doiTuong == 0) {
        diemCongDoiTuong = 0 ;
    } else if(doiTuong == 1) {
        diemCongDoiTuong = 2.5 ;
    } else if (doiTuong == 2) {
        diemCongDoiTuong = 1.5 ;
    } else {
        diemCongDoiTuong = 1 ;
    }
    return diemCongDoiTuong ; 
}


// Bài 2 
const KW_1_50 = 500 ;
const KW_50_KETIEP = 650 ;
const KW_100_KETIEP = 850 ; 
const KW_150_KETIEP = 1100 ;
const KW_CONLAI = 1300 ;
//Hàm chính
function tinhTienDien(){
 var name = document.querySelector("#name").value;
 var kW = document.querySelector("#kwUsed").value ; 
 console.log(name,kW)

 var total = tinhTheoKW(kW,KW_1_50,KW_50_KETIEP,KW_100_KETIEP,KW_150_KETIEP,KW_CONLAI)
 document.querySelector("#txtKw").innerHTML = " Họ và Tên: " + name + " ;" + " Tiền điện : " + new Intl.NumberFormat('vn-VN').format(total); 

}
document.querySelector("#btnKw").onclick = tinhTienDien

// Hàm Tính tiền theo KW 
function tinhTheoKW(kW,gia_1_50,gia_50_ketiep,gia_100_ketiep,gia_150_ketiep,gia_conlai){
    var total ;
    if(0<kW && kW <= 50) {
        total = kW * gia_1_50 ;
    } else if( kW > 50 && kW <= 100) {
        total =  50 * gia_1_50 +  (kW-50) * gia_50_ketiep ;
    } else if (kW > 100 && kW <= 200) {
        total =  50 * gia_1_50 +  50 * gia_50_ketiep + (kW-100) * gia_100_ketiep ;
    } else if (kW> 200 && kW <= 350) {
        total =  50 * gia_1_50 +  50 * gia_50_ketiep + 100 * gia_100_ketiep + (kW-200) * gia_150_ketiep ;
    } else {
        total =  50 * gia_1_50 +  50 * gia_50_ketiep + 100 * gia_100_ketiep + 150 * gia_150_ketiep + (kW-350)* gia_conlai ;
    }
    return total ;
}

// Bài 3
// Hàm chính 
function personalTax() {
    var fullName = document.querySelector("#fullName").value;
    var incomeYear = document.querySelector("#incomeYear").value ;
    var people = document.querySelector("#people").value ;
    console.log(fullName,incomeYear,people )
    // tính thu nhập chịu thuế
    var taxIncome = incomeYear - 4e+6 - people * 1.6e+6 ;
    console.log(taxIncome)

    document.querySelector("#txtTax").innerHTML = "Họ tên: " + fullName + " ; " + " Tiền thuế thu nhập cá nhân " + new Intl.NumberFormat('vn-VN').format(taxIncome*percentTax(taxIncome))
}
// khai báo hàm % thuế
function percentTax(taxIncome){
    var percent ;
    if(taxIncome <= 60e+6 ) {
        percent = 5 / 100 ; 
    } else if(taxIncome > 60e+6 && taxIncome <= 120e+6) {
        percent = 10 / 100 ;
    } else if (taxIncome > 120e+6 && taxIncome <=210e+6) {
        percent = 15 / 100 ;
    } else if (taxIncome > 210e+6 && taxIncome <= 384e+6) {
        percent = 20 / 100 ;
    } else if (taxIncome > 384e+6 && taxIncome <= 624e+6) {
        percent = 25 / 100 ;
    } else if (taxIncome > 624e+6 && taxIncome <= 960e+6) {
        percent = 30 / 100 ;
    } else {
        percent = 35 / 100 ;
    }
    return percent ;
}

document.querySelector("#btnTax").onclick = personalTax ;

// Bài 4
// Khai báo phí của nhà dân và doanh nghiệp 
const XLYHD_NHADAN = 4.5 ;
const DVCB_NHADAN = 20.5 ;
const TKCC_NHADAN = 7.5 ; 

const XLYHD_DOANHNGHIEP = 15 ;
const DVCB_1_10_DOANHNGHIEP = 75 ;
const DVCB_11_DOANHNGHIEP = 5 ;
const TKCC_DOANHNGHIEP = 50 
// Hàm chính
function CountCable() {
    var select = document.querySelector("#selection").value ;
    var connect = document.querySelector("#connection").value ;
    var customer = document.querySelector("#customer").value ;
    var channel = document.querySelector("#channel").value ;
    console.log(select,connect,customer,channel)
    var sumCable ;
    if (select == "1") {
        sumCable = nhaDan(channel, XLYHD_NHADAN,DVCB_NHADAN,TKCC_NHADAN)
    } else {
        sumCable = doanhNghiep(connect,channel,XLYHD_DOANHNGHIEP,DVCB_1_10_DOANHNGHIEP,DVCB_11_DOANHNGHIEP,TKCC_DOANHNGHIEP)
    }
    document.querySelector("#txtCable").innerHTML = "Mã khách hàng: " + customer + " ; " + " Tiền cáp: " + "$"+sumCable 
}

document.querySelector("#btnCable").onclick = CountCable

// Khai báo hàm hiện ô input Số kết nối 
function showConnection() {
    var x = document.querySelector("#selection").value ; 
    if(x == "2") {
        document.querySelector("#connection").style.display = "block" ;
    } else {
        document.querySelector("#connection").style.display = "none" ;
    }
}

// Khai báo hàm tính phí của nhà dân
function nhaDan(channel, gia_XLHD,gia_DVCB,gia_TKCC) {
    var peopleCable = gia_XLHD + gia_DVCB + channel * gia_TKCC ;
    return peopleCable ;
}

// Khai báo hàm tính phí của doanh nghiệp
function doanhNghiep(connect,channel,gia_XLHD,gia_1_10_DVCB,gia_11_DVCB,gia_TKCC) {
    var companyCable ;
    if(connect <= 10) {
        companyCable = gia_XLHD + gia_1_10_DVCB + channel * gia_TKCC ;
    } else {
        companyCable = gia_XLHD + gia_1_10_DVCB + (connect-10) * gia_11_DVCB + channel * gia_TKCC ;
    }
    return companyCable ;
}

