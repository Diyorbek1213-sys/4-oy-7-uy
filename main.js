// step-1 Boshlang‘ich darajadagi masalalar

// Berilgan massivdagi barcha elementlarni konsolga chiqaring.
alert("1-vazifa")
let massive_1 = [50, 15, 49, 18, 94, 29]

for(let i_1 = 0; i_1 < massive_1.length; i_1++) {
    console.log(massive_1[i_1])
}

// Massiv elementlarining yig‘indisini hisoblang.
alert("2-vazifa")
let massive_2 = [15, 15, 79, 13, 49, 16]
let yigindi_1 = 0

for(let i_2 = 0; i_2 < massive_2.length; i_2++) {
    yigindi_1 += massive_2[i_2]
}

console.log(yigindi_1)

// Massivdagi eng katta elementni toping.
alert("3-vazifa")
let massive_3 = [59, 123, 569, 423, 156]
let max_1

for(let i_3 = 0; i_3 < massive_3.length; i_3++) {
    if (massive_3[0] > massive_3[1]) {
        max_1 = massive_3[0]
    } else {
        max_1 = massive_3[1]
    }

    if (massive_3[2] > massive_3[1]) {
        max_1 = massive_3[2]
    } else {
        max_1 = massive_3[3]
    }

    if (massive_3[4] > massive_3[3]) {
        max_1 = massive_3[4]
    }


}

console.log("kattasi: ", max_1)

// Massivdagi eng kichik elementni toping.
alert("4-vazifa")
let massive_4 = [12, 458, 185, 2, 48, 18]
let min_1 = massive_4[0]

for(let i_4 = 1; i_4 < massive_4.length; i_4++) {
    if (min_1 > massive_4[i_4]) {
        min_1 = massive_4[i_4]
    }
}

console.log(min_1)

// Massivdagi barcha juft sonlarni konsolga chiqaring.
alert("5-vazifa")
let massive_5 = [52, 15, 455, 14, 15, 59, 144]

for(let i_5 = 0; i_5 < massive_5.length; i_5++) {
    if (massive_5[i_5] % 2 === 0) {
        console.log(massive_5[i_5])
    }
}

// Massivdagi barcha toq sonlarni konsolga chiqaring.
alert("6-vazifa")
let massive_6 = [52, 15, 165, 14, 17, 12, 555]

for(let i_6 = 0; i_6 < massive_6.length; i_6++) {
    if (massive_6[i_6] % 2 === 1) {
        console.log(massive_6[i_6])
    }
}

// Massivdagi manfiy sonlar sonini hisoblang.
alert("7-vazifa")
let massive_7 = [-5, -9, -6, 14, 5, 14, 26, 17]
let manfiy = 0

for(let i_7 = 0; i_7 < massive_7.length; i_7++) {
    if (massive_7[i_7] < 0) {
        manfiy++
    }
}

console.log("manfiy :", manfiy)

// Massivdagi musbat sonlar sonini hisoblang.
alert("8-vazifa")
let massive_8 = [-5, -9, -6, 14, 5, 14, 26, 17]
let musbat = 0

for(let i_8 = 0; i_8 < massive_8.length; i_8++) {
    if (massive_8[i_8] > 0) {
        musbat++
    }
}

console.log("musbat :", musbat)

// Massivdagi elementlarning o‘rtacha qiymatini toping.
alert("9-vazifa") // ishlashni tushunmadim

// Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).
alert("10-vazifa")
let massive_9 = [53, 78, 498, 12, 58, 59] // ustoz to'g'risini aytganda youtubedan qanday siklni minus qilishni korib qildim

for(let i = massive_9.length - 1; i >= 0; i--) {
    console.log(massive_9[i])
}

// Massivning teskari nusxasini yarating.
alert("11-vazifa") // uni tushunmadim ustoz nusxasini teskari qilishni

// Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.
alert("12-vazifa")
let massive_10 = [12, 15, 78, 48, 18,71]

for(let i_9 = 0; i_9 < massive_10.length; i_9++) {
    massive_10[i_9] *= 2
    console.log(massive_10[i_9])
}

// Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.
alert("13-vazifa")
let massive_11 = [549, 18, 48, 41, 0, 7, 0]
let yigindi_2 = 0

for(let i_10 = 0; i_10 < massive_11.length; i_10++) {
    if (massive_11[i_10] === 0) {
        yigindi_2++
    }
}

console.log("no'l nechtaligi", yigindi_2)

// Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.
alert("14-vazifa")
let massive_12 = [45, 12, 10, 15, 89, 16, 27]
for(let i_11 = 0; i_11 < massive_12.length; i_11++) {
    if (massive_12[i_11] % 5 === 0) {
        console.log(massive_12[i_11])
    }
}

// Massivni tartiblang (o‘sish bo‘yicha).
alert("15-vazifa") // ustoz tartiblash nimaligi bilaman lekin qanday qilishni bilmas ekanman buni dars vaqti organib olaman

// Massivni tartiblang (kamayish bo‘yicha).
alert("16-vazifa") // ustoz tartiblash nimaligi bilaman lekin qanday qilishni bilmas ekanman buni dars vaqti organib olaman

// Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.
alert("17-vazifa")
let massive_13 = [45, 88, 2, 14, 36, 5]
let massive_14 = []

for(let i_12 = 0; i_12 < massive_13.length; i_12++) {
    let work = massive_13[i_12] += 3;
    massive_14.push(work)
}

console.log(massive_14)

// Massivdagi barcha musbat sonlarni alohida massivga ajrating.
alert("18-vazifa")
let massive_15 = [12, -9, 15,-5, 15, -4]
let massive_16 = []

for(let i_13 = 0; i_13 < massive_15.length; i_13++) {
    if (massive_15[i_13] > 0) {
        massive_16.push(massive_15[i_13])
    }
}

console.log(massive_16)

// Massivdagi barcha manfiy sonlarni alohida massivga ajrating.
alert("19-vazifa")
let massive_17 = [12, -9, 15,-5, 15, -4]
let massive_18 = []

for(let i_14 = 0; i_14 < massive_17.length; i_14++) {
    if (massive_17[i_14] < 0) {
        massive_18.push(massive_17[i_14])
    }
}

console.log(massive_18)

// Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.
alert("20-vazifa")
let massive_19 = [12, 49, 24, 96, 11, 15, 8]

for(let i_15 = 0; i_15 < massive_19.length; i_15++) {
    if (massive_19[i_15] % 2 === 1) {
        console.log(massive_19[i_15])
    }
}

// step-2 O‘rta darajadagi masalalar

// Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating.
alert("21-vazifa") // ustoz ancha harakat qildim lekin eplolmadim ohiridan sonlarni olib kordim boshidanam barbir bolmadi

// Massivda nechta element 10 dan katta ekanini aniqlang.
alert("22-vazifa")
let massive_20 = [15, 84, 18, 1, 5, 4, 9]
let counter = 0

for(let i_16 = 0; i_16 < massive_20.length; i_16++) {
    if (massive_20[i_16] > 10) {
        counter++
    }
}

console.log("nechta son 10 dan kattaligi soni: ", counter)

// Massivdagi barcha elementlarni 0 ga almashtiring.
alert("23-vazifa")
let massive_21 = [45, 84, 45, 258, 85]

for(let i_17 = 0; i_17 < massive_21.length; i_17++) {
    massive_21[i_17] = 0
}

console.log(massive_21)

// Massivning birinchi elementini oxiriga o‘tkazing.
alert("24-vazifa")
let massive_22 = [24, 59, 26, 89, 41,]

let one = massive_22.shift()
massive_22.push(one)

console.log(massive_22)

// Massivning oxirgi elementini boshiga o‘tkazing.
alert("25-vazifa")
let massive_23 = [52, 14, 99, 58, 32, 58]

let two = massive_23.pop()
massive_23.unshift(two)

console.log(massive_23)

// Massivdan har ikkinchi elementni o‘chiring.
alert("26-vazifa")
let massive_24 = [12, 56, 78, 36, 95]

let massive_25 = []

for(let i_18 = 0; i_18 < massive_24.length; i_18++) {
    if (i_18 % 2 === 0) {
        massive_25.push(massive_24[i_18])
    }
}

console.log(massive_25)

// Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.
alert("27-vazifa")
let massive_26 = [-8, 5, 9, -6, 47, -2]

for(let i_19 = 0; i_19 < massive_26.length; i_19++) {
    if (massive_26[i_19] < 0) {
        massive_26[i_19] = 0
    }
}

console.log(massive_26)

// Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.
alert("28-vazifa")
let massive_27 = [54, 12, 9, 36, 78, 5]
let massive_28 = []

for(let i_20 = 0; i_20 < massive_27.length; i_20++) {
    massive_27[i_20] *= i_20
    massive_28.push(massive_27[i_20])
}

console.log(massive_28)

// Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.
alert("29-vazifa")
let massive_29 = [5, 56, 96, 47, 50, 6, 13]
let massive_30 = []

for(let i_21 = 0; i_21 < massive_29.length; i_21++) {
    if (massive_29[i_21] % 3 === 0) {
        massive_30.push(massive_29[i_21])
    }
}

console.log(massive_30)

// Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).
alert("30-vazifa")
let massive_31 = [12, 12, 56, 98, 98, 56, 1, 2]
let massive_32 = [] // xato

for(let i_22 = 0; i_22 < massive_31.length; i_22++) {
    if (massive_31[i_22] === massive_31[i_22]) {
        massive_32.push(massive_31[i_22])
    }
}

console.log(massive_32)

// Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.
alert("31-vazifa")
let massive_33 = [12, 56, 74, 9, 59, 57]
let massive_34 = []

for(let i_23 = 0; i_23 < massive_33.length; i_23++) {
    if (i_23 % 2 === 0) {
        massive_34.push(massive_33[i_23])
    }
}

console.log(massive_34)

// Massivdan 2 ga karrali sonlarni olib tashlang.
alert("32-vazifa")
let massive_35 = [15, 14, 36, 96, 87, 59, 2]

for(let i_24 = 0; i_24 < massive_35.length; i_24++) {
    if (massive_35[i_24] % 2 === 1) {
        console.log(massive_35[i_24])
    }
}

// Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).
alert("33-vazifa")

// Massivning birinchi va oxirgi elementlarini almashtiring.
alert("34-vazifa") // son 7 ta bo'lib qoldi
let massive_36 = [21, 45, 96, 878, 36, 98]

let four = massive_36[0]

let three = massive_36.pop()
massive_36.unshift(three)
massive_36.push(four)

console.log(massive_36)

// Massivni boshqa massiv bilan birlashtiring.
alert("35-vazifa")
let massive_37 = [56, 48, 48, 215, 885, 2]
let massive_38 = [59, 1, 178, 369, 15, 9]

massive_37.push(massive_38)
massive_38.push(massive_37)

console.log(massive_37, massive_38)

// Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.
alert("36-vazifa")
let massive_39 = [25, 6, 47, 96, 12, 28, 1]
let massive_40 = []

for(let i_25 = 0; i_25 < massive_39.length; i_25++) {
    if(massive_39[i_25] % 3 === 0) {
        massive_40.push(massive_39[i_25])
    }
}

console.log(massive_40)

// Massivdan manfiy sonlarni olib tashlang.
alert("37-vazifa")
let massive_41 = [-9, 5, 78, 17, 12, -6, -99]
let massive_42 = []

for(let i_26 = 0; i_26 < massive_41.length; i_26++) {
    if(massive_41[i_26] > 0) {
        massive_42.push(massive_41[i_26])
    }
}

console.log(massive_42)

// Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.
alert("38-vazifa")
let massive_43 = [8, 48, 45, 366, 6, 5, 4]

for(let i_27 = 0; i_27 < massive_43.length; i_27++) {
    if(i_27 % 2 === 0) {
        massive_43[i_27] = 0
    }
}

console.log(massive_43)

// Massivdan takroriy elementlarni olib tashlang.
alert("39-vazifa") // ustoz tepada kelgan edi huddi shu vazifa buni qilolmagandim

// Massivning o‘rta indeksiga yangi element qo‘shing.
alert("40-vazifa") // o'rtasini topishniyam bilmayman unga qanday yangi element qo'shaman

// Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.
alert("41-vazifa")
// ustoz massivni 2 ga ajrataman deb 3 tasini .pop bilan olib yangi massivga otkizaman desam yangi massivdanam eski massivdanam ochib ketyapti

// Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).
alert("42-vazifa")
let massive_44 = [45, 2, 99, 36, 47, 256]

let five = massive_44.pop()
massive_44.unshift(five)

console.log(massive_44)

// Massivni aylantiring (birinchi elementni oxiriga qo‘ying).
alert("43-vazifa")
let massive_45 = [45, 2, 99, 36, 47, 256]

let six = massive_45.shift()
massive_45.push(six)

console.log(massive_45)

// Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.
alert("44-vazifa")
let massive_46 = [555, 77, -9, 45, 6, -998, 5, -6]
let massive_47 = []

for(let i_28 = 0; i_28 < massive_46.length; i_28++) {
    if(massive_46[i_28] > 0) {
        massive_47.push(massive_46[i_28])
    }

    if(massive_46[i_28] < 0) {
        massive_47.push(massive_46[i_28])
    }
}

console.log(massive_47)

// Massivning eng kichik elementini o‘chiring.
alert("45-vazifa") // unchalik oxshatolmadim lekin eng kichigini topdim o'chirishda muammo bo'ldi
let massive_48 = [58, 4, 3, 99, 18, 19, 57]
let massive_49 = []
let the_Smallest_Of_All = massive_48[0]

for(let i_29 = 0; i_29 < massive_48.length; i_29++) {
    if(massive_48[i_29] < the_Smallest_Of_All) {
        the_Smallest_Of_All = massive_48[i_29]
    }

    if(the_Smallest_Of_All < massive_48[i_29]) {
        massive_49.push(massive_48[i_29])
    }
}

console.log(massive_49)

// Massivning eng katta elementini o‘chiring.
alert("46-vazifa") // ustoz buniham qilolmadim 
let massive_50 = [58, 4, 3, 99, 18, 19, 159]
let massive_51 = []
let the_Biggest_Of_All = massive_50[0]

for(let i_30 = 0; i_30 < massive_50.length; i_30++) {
    if(massive_50[i_30] > the_Smallest_Of_All) {
        the_Biggest_Of_All = massive_50[i_30]
    }

    if(the_Biggest_Of_All > massive_50[i_30]) {
        massive_51.push(massive_50[i_30])
    }
}

console.log(massive_51)

// Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.
alert("47-vazifa")
let massive_52 = [55, 96, 17, 39, 55, 78, 12]

for(let i_31 = 0; i_31 < massive_52.length; i_31++) {
    if(massive_52[i_31] % 2 === 1) {
        massive_52[i_31] = 10
    }
}

console.log(massive_52)

// Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
alert("48-vazifa") // vazifa yo'q

// Massiv elementlarini karralik bo‘yicha (2, 3, 5 kabi) guruhlarga ajrating.
alert("49-vazifa") // oxshamadi
let massive_53 = [15, 96, 47, 55, 88, 65, 22, 14]
let massive_54 = []

for(let i_32 = 0; i_32 < massive_53.length; i_32++) {
    if(massive_53[i_32] % 2 === 0) {
        massive_54.push(massive_53[i_32])
    }

    if(massive_53[i_32] % 2 === 1) {
        massive_54.push(massive_53[i_32])
    }
}

console.log(massive_54)

// Massivni aylantirish (rotation) orqali 3 marta oldinga suring.
alert("50-vazifa") // bu rotation degan kodni kormaganman yozib korsam chiqmadi vc codega