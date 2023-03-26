// GANJIL
let g1 = 1
let g2 = 3
let g3 = 5
let g4 = 7
let g5 = 9
let g6 = 11
let g7 = 13
let g8 = 15
let g9 = 17
let g10 = 19
let g11 = 21
let g12 = 23
let g13 = 25
let g14 = 27
let g15 = 29
let g16 = 31
let g17 = 33
let g18 = 35
let g19 = 37
let g20 = 39
let g21 = 41
let g22 = 43
let g23 = 45
let g24 = 47
let g25 = 49
let g26 = 51
let g27 = 53
let g28 = 55
let g29 = 57
let g30 = 59
let g31 = 61
let g32 = 63
let g33 = 65
let g34 = 67
let g35 = 69
let g36 = 71
let g37 = 73
let g38 = 75
let g39 = 77
let g40 = 79
let g41 = 81
let g42 = 83
let g43 = 85
let g44 = 87
let g45 = 89
let g46 = 91
let g47 = 93
let g48 = 95
let g49 = 97
let g50 = 99

const ganjil = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21,g22,g23,g24,g25,g26,g27,g28,g29,g30,g31,g32,g33,g34,g35,g36,g37,g38,g39,g40,g41,g42,g43,g44,g45,g46,g47,g48,g49,g50]
let total_ganjil = "Total ganjil = " + (g1+g2+g3+g4+g5+g6+g7+g8+g9+g10+g11+g12+g13+g14+g15+g16+g17+g18+g19+g20+g21+g22+g23+g24+g25+g26+g27+g28+g29+g30+g31+g32+g33+g34+g35+g36+g37+g38+g39+g40+g41+g42+g43+g44+g45+g46+g47+g48+g49+g50)
let avg_ganjil = "rata rata ganjil = " + (g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21,g22,g23,g24,g25,g26,g27,g28,g29,g30,g31,g32,g33,g34,g35,g36,g37,g38,g39,g40,g41,g42,g43,g44,g45,g46,g47,g48,g49,g50)/50
Array.prototype.max = function() {
    return Math.max.apply(null, this)
  }
  Array.prototype.min = function() {
    return Math.min.apply(null, this)
  }
console.log(ganjil)  
console.log(avg_ganjil)
console.log(`Max = ${ganjil.max()}` + `\nMin = ${ganjil.min()}`)
console.log(total_ganjil)

// genap
let gn1 = 2
let gn2 = 4
let gn3 = 6
let gn4 = 8
let gn5 = 10
let gn6 = 12
let gn7 = 14
let gn8 = 16
let gn9 = 18
let gn10 = 20
let gn11 = 22
let gn12 = 24
let gn13 = 26
let gn14 = 28
let gn15 = 30
let gn16 = 32
let gn17 = 34
let gn18 = 36
let gn19 = 38
let gn20 = 40
let gn21 = 42
let gn22 = 44
let gn23 = 46
let gn24 = 48
let gn25 = 50
let gn26 = 52
let gn27 = 54
let gn28 = 56
let gn29 = 58
let gn30 = 60
let gn31 = 62
let gn32 = 64
let gn33 = 66
let gn34 = 68
let gn35 = 70
let gn36 = 72
let gn37 = 74
let gn38 = 76
let gn39 = 78
let gn40 = 80
let gn41 = 82
let gn42 = 84
let gn43 = 86
let gn44 = 88
let gn45 = 90
let gn46 = 92
let gn47 = 94
let gn48 = 96
let gn49 = 98
let gn50 = 100

const genap = [gn1,gn2,gn3,gn4,gn5,gn6,gn7,gn8,gn9,gn10,gn11,gn12,gn13,gn14,gn15,gn16,gn17,gn18,gn19,gn20,gn21,gn22,gn23,gn24,gn25,gn26,gn27,gn28,gn29,gn30,gn31,gn32,gn33,gn34,gn35,gn36,gn37,gn38,gn39,gn40,gn41,gn42,gn43,gn44,gn45,gn46,gn47,gn48,gn49,gn50]
let total = "Total genap = " + (gn1+gn2+gn3+gn4+gn5+gn6+gn7+gn8+gn9+gn10+gn11+gn12+gn13+gn14+gn15+gn16+gn17+gn18+gn19+gn20+gn21+gn22+gn23+gn24+gn25+gn26+gn27+gn28+gn29+gn30+gn31+gn32+gn33+gn34+gn35+gn36+gn37+gn38+gn39+gn40+gn41+gn42+gn43+gn44+gn45+gn46+gn47+gn48+gn49+gn50)
let avg_genap = "rata rata genap = " + (gn1,gn2,gn3,gn4,gn5,gn6,gn7,gn8,gn9,gn10,gn11,gn12,gn13,gn14,gn15,gn16,gn17,gn18,gn19,gn20,gn21,gn22,gn23,gn24,gn25,gn26,gn27,gn28,gn29,gn30,gn31,gn32,gn33,gn34,gn35,gn36,gn37,gn38,gn39,gn40,gn41,gn42,gn43,gn44,gn45,gn46,gn47,gn48,gn49,gn50)/50
Array.prototype.max = function() {
    return Math.max.apply(null, this)
  }
  Array.prototype.min = function() {
    return Math.min.apply(null, this)
  }
console.log(genap)  
console.log(avg_genap)
console.log(`Max = ${genap.max()}` + `\nMin = ${genap.min()}`)
console.log(total)

// PERBANDINGAN
let banding_avg = avg_ganjil + ' : ' + avg_genap
let banding_total = total_ganjil + ' : ' + total

console.log('-------PERBANDINGAN-------')
console.log(banding_avg)
console.log(`Max ganjil  = ${ganjil.max()}` +' : ' + `Min genap = ${genap.max()}`)
console.log(`Min ganjil = ${ganjil.min()}` + ' : ' + `Min genap = ${genap.min()}`)
console.log(banding_total)



