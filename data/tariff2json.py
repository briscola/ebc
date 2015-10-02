# coding: utf-8

import json
from collections import OrderedDict

csvFileName = "tariff.csv"

#読み出しで開く
csvFile = open(csvFileName, 'rU', encoding='shift-jis')

#行のリストを作成
eachLine = []

for line in csvFile:
  eachLine.append(line)

#ファイル閉じる
csvFile.close()

eachPart = [""] * len(eachLine)

#各行をカンマで分割
for i in range(len(eachLine)):
  eachPart[i] = eachLine[i].strip().split(',')
  
#キーのリスト
keyList = eachPart.pop(0)

#配列
eachDict = OrderedDict()

for i in range(len(eachPart)):
  companyid = eachPart[i][0]
  companyJname = eachPart[i][1]
  companyname = eachPart[i][2]
  planid = eachPart[i][3]
  planname = eachPart[i][4]
  plandisc = eachPart[i][5]
  planchange = eachPart[i][6]
  url = eachPart[i][7]
  startdate = eachPart[i][8] # yyyy/MM/dd
  enddate = eachPart[i][9] # yyyy/MM/dd
  basicid = eachPart[i][10]
  basicname = eachPart[i][11]
  basicunit = eachPart[i][12]
  basic1 = eachPart[i][13]
  basic1_2_kva = eachPart[i][14]
  basic2 = eachPart[i][15]
  basic2_3_kva = eachPart[i][16]
  basic3unit = eachPart[i][17]
  minimumfee = eachPart[i][18]
  minimumkwh = eachPart[i][19]
  amountid = eachPart[i][20]
  amountname = eachPart[i][21]
  amountunit1 = eachPart[i][22]
  amountunit1_2_kwh = eachPart[i][23]
  amountunit2 = eachPart[i][24]
  amountunit2_3_kwh = eachPart[i][25]
  amountunit3 = eachPart[i][26]
  amountstarttime = eachPart[i][27]
  amountendtime = eachPart[i][28]
  nightunit = eachPart[i][29]
  nightstarttime = eachPart[i][30]
  nightendtime = eachPart[i][31]
  weekendunit = eachPart[i][32] # weekend or holiday
  morningeveningunit = eachPart[i][33]
  summerunit = eachPart[i][34]
  summerstartdate = eachPart[i][35] # MM/dd
  summerenddate = eachPart[i][36] # MM/dd
  summerstarttime = eachPart[i][37]
  summerendtime = eachPart[i][38]
  winterstartdate = eachPart[i][39] # MM/dd
  winterenddate = eachPart[i][40] # MM/dd
  winterunit1 = eachPart[i][41]
  winterunit1_2_kwh = eachPart[i][42]
  winterunit2 = eachPart[i][43]
  winterunit2_3_kwh = eachPart[i][44]
  winterunit3 = eachPart[i][45]
  winterpeakunit = eachPart[i][46]
  winterpeakstarttime = eachPart[i][47]
  winterpeakendtime = eachPart[i][48]

  # 料金プラン
  plan = OrderedDict()
  plan["planid"] = planid
  plan["planname"] = planname
  plan["plandisc"] = plandisc
  plan["planchange"] = planchange
  plan["url"] = url
  if startdate != "": plan["startdate"] = startdate
  if enddate != "": plan["enddate"] = enddate

  # 基本料金
  plan["basicid"] = int(basicid)
  plan["basicname"] = basicname
  if basicunit != "": plan["basicunit"] = float(basicunit)
  if basic1_2_kva != "": plan["basic1_2_kva"] = float(basic1_2_kva)
  if basic2_3_kva != "": plan["basic2_3_kva"] = float(basic2_3_kva)
  if basic1 != "": plan["basic1"] = float(basic1)
  if basic2 != "": plan["basic2"] = float(basic2)
  if basic3unit != "": plan["basic3unit"] = float(basic3unit)
  if minimumfee != "": plan["minimumfee"] = float(minimumfee)
  if minimumkwh != "": plan["minimumkwh"] = int(minimumkwh)

  # 電力量料金
  plan["amountid"] = int(amountid)
  plan["amountname"] = amountname
  if amountunit1_2_kwh != "": plan["amountunit1_2_kwh"] = int(amountunit1_2_kwh)
  if amountunit2_3_kwh != "": plan["amountunit2_3_kwh"] = int(amountunit2_3_kwh)
  if amountunit1 != "": plan["amountunit1"] = float(amountunit1)
  if amountunit2 != "": plan["amountunit2"] = float(amountunit2)
  if amountunit3 != "": plan["amountunit3"] = float(amountunit3)
  if amountstarttime != "": plan["amountstarttime"] = float(amountstarttime)
  if amountendtime != "": plan["amountendtime"] = float(amountendtime)
  if nightunit != "": plan["nightunit"] = float(nightunit)
  if nightstarttime != "": plan["nightstarttime"] = float(nightstarttime)
  if nightendtime != "": plan["nightendtime"] = float(nightendtime)
  if weekendunit != "": plan["weekendunit"] = float(weekendunit)
  if morningeveningunit != "": plan["morningeveningunit"] = float(morningeveningunit)
  if summerunit != "": plan["summerunit"] = float(summerunit)
  if summerstartdate != "": plan["summerstartdate"] = summerstartdate
  if summerenddate != "": plan["summerenddate"] = summerenddate
  if summerstarttime != "": plan["summerstarttime"] = float(summerstarttime)
  if summerendtime != "": plan["summerendtime"] = float(summerendtime)
  if winterstartdate != "": plan["winterstartdate"] = winterstartdate
  if winterenddate != "": plan["winterenddate"] = winterenddate
  if winterunit1 != "": plan["winterunit1"] = float(winterunit1)
  if winterunit1_2_kwh != "": plan["winterunit1_2_kwh"] = int(winterunit1_2_kwh)
  if winterunit2 != "": plan["winterunit2"] = float(winterunit2)
  if winterunit2_3_kwh != "": plan["winterunit2_3_kwh"] = int(winterunit2_3_kwh)
  if winterunit3 != "": plan["winterunit3"] = float(winterunit3)
  if winterpeakunit != "": plan["winterpeakunit"] = float(winterpeakunit)
  if winterpeakstarttime != "": plan["winterpeakstarttime"] = float(winterpeakstarttime)
  if winterpeakendtime != "": plan["winterpeakendtime"] = float(winterpeakendtime)
  
  if companyname not in eachDict:
    eachDict[companyname] = OrderedDict()
    eachDict[companyname]["companyname"] = companyJname
    eachDict[companyname]["plans"] = []
  
  eachDict[companyname]["plans"].append(plan)

json_data = json.dumps(eachDict, indent=2, ensure_ascii=False)

with open("tariff.json", 'w') as f:
  f.write(json_data)
