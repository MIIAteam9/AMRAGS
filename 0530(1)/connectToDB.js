/**
 * @license
 * Project Name: 自動化病歷輔助生成系統
 * Description: 輔仁大學醫學資訊與創新應用學士學位學程第七屆第九組專題
 * Author: 410570231 郭秉龍
 * Version: 113.5.29 
 * Professor:郭冠良醫師
 */

document.addEventListener("DOMContentLoaded", function() {
    // 從 URL 獲取 record_id
    const urlParams = new URLSearchParams(window.location.search);
    const record_id = urlParams.get('record_id');

    if (record_id) {
        fetchRecordData(record_id);
    }

    function fetchRecordData(record_id) {
        fetch(`get_record.php?record_id=${record_id}`)
            .then(response => response.json())
            .then(data => {
                if (data && !data.error) {
                    document.getElementById('database-input-O').value = 
                    `病歷號: ${data['record_id']}\n` +
                    `姓名: ${data['COL 2']}\n` +
                    `性別: ${data['COL 3']}\n` +
                    `年齡: ${data['COL 4']}\n` +
                    `檢查日期: ${data['COL 5']}\n` +
                    `體重: ${data['COL 6']}\n` +
                    `身高: ${data['COL 7']}\n` +
                    `腰圍: ${data['COL 8']}\n` +
                    `臀圍: ${data['COL 9']}\n` +
                    `體溫: ${data['COL 10']}\n` +
                    `脈搏: ${data['COL 11']}\n` +
                    `收縮壓(若只測單手請輸入此欄位): ${data['COL 12']}\n` +
                    `舒張壓(若只測單手請輸入此欄位): ${data['COL 13']}\n` +
                    `收縮壓: ${data['COL 14']}\n` +
                    `舒張壓: ${data['COL 15']}\n` +
                    `右眼裸視: ${data['COL 16']}\n` +
                    `左眼裸視: ${data['COL 17']}\n` +
                    `右眼矯正視力: ${data['COL 18']}\n` +
                    `左眼矯正視力: ${data['COL 19']}\n` +
                    `右眼眼壓: ${data['COL 20']}\n` +
                    `左眼眼壓: ${data['COL 21']}\n` +
                    `主訴: ${data['COL 22']}\n` +
                    `免疫分析法糞便潛血: ${data['COL 23']}\n` +
                    `糞便型態: ${data['COL 24']}\n` +
                    `糞便顏色: ${data['COL 25']}\n` +
                    `糞便黏液: ${data['COL 26']}\n` +
                    `糞便潛血: ${data['COL 27']}\n` +
                    `糞便其他: ${data['COL 28']}\n` +
                    `尿液外觀: ${data['COL 29']}\n` +
                    `尿酸鹼度: ${data['COL 30']}\n` +
                    `尿液比重: ${data['COL 31']}\n` +
                    `尿蛋白: ${data['COL 32']}\n` +
                    `尿糖: ${data['COL 33']}\n` +
                    `尿潛血: ${data['COL 34']}\n` +
                    `尿液紅血球: ${data['COL 35']}\n` +
                    `尿液白血球: ${data['COL 36']}\n` +
                    `尿液上皮細胞: ${data['COL 37']}\n` +
                    `尿液圓柱: ${data['COL 38']}\n` +
                    `尿液結晶: ${data['COL 39']}\n` +
                    `尿液細菌: ${data['COL 40']}\n` +
                    `酮體: ${data['COL 41']}\n` +
                    `尿膽紅素: ${data['COL 42']}\n` +
                    `尿膽素原(質性): ${data['COL 43']}\n` +
                    `尿膽素原: ${data['COL 44']}\n` +
                    `尿亞硝酸鹽 : ${data['COL 45']}\n` +
                    `白血球酯解脢: ${data['COL 46']}\n` +
                    `尿液其他: ${data['COL 47']}\n` +
                    `微量白蛋白尿: ${data['COL 48']}\n` +
                    `白血球 : ${data['COL 49']}\n` +
                    `紅血球: ${data['COL 50']}\n` +
                    `血色素: ${data['COL 51']}\n` +
                    `血球比容: ${data['COL 52']}\n` +
                    `平均紅血球容積: ${data['COL 53']}\n` +
                    `平均紅血球色素: ${data['COL 54']}\n` +
                    `平均紅血球血色素濃度: ${data['COL 55']}\n` +
                    `血小板: ${data['COL 56']}\n` +
                    `紅血球容積分佈範圍-標準偏差: ${data['COL 57']}\n` +
                    `中性球: ${data['COL 58']}\n` +
                    `淋巴球: ${data['COL 59']}\n` +
                    `單核球: ${data['COL 60']}\n` +
                    `嗜依紅球: ${data['COL 61']}\n` +
                    `嗜鹼性球: ${data['COL 62']}\n` +
                    `梅毒檢查: ${data['COL 63']}\n` +
                    `HIV: ${data['COL 64']}\n` +
                    `ABO: ${data['COL 65']}\n` +
                    `Rh: ${data['COL 66']}\n` +
                    `紅血球沈降速率 (ESR 1hr): ${data['COL 67']}\n` +
                    `紅血球沈降速率 (ESR 2hr): ${data['COL 68']}\n` +
                    `凝血脢原時間 (PT): ${data['COL 69']}\n` +
                    `甲狀腺素 (T4): ${data['COL70']}\n` +
                    `三碘甲狀腺素 (T3): ${data['COL 71']}\n` +
                    `甲狀腺刺激素 (TSH): ${data['COL 72']}\n` +
                    `游離甲狀腺素 (Free T4): ${data['COL 73']}\n` +
                    `B型肝炎表面抗原 (HBsAg): ${data['COL 74']}\n` +
                    `B型肝炎表面抗體 (Anti-HBs): ${data['COL 75']}\n` +
                    `B型肝炎核心抗體 (Anti-HBc): ${data['COL 76']}\n` +
                    `B型肝炎e抗原 (HBeAg): ${data['COL 77']}\n` +
                    `C型肝炎抗體 (Anti-HCV): ${data['COL 78']}\n` +
                    `A型肝炎IgG抗體 (HAV IgG): ${data['COL 79']}\n` +
                    `甲型胎兒蛋白 (AFP): ${data['COL 80']}\n` +
                    `癌胚胎抗原 (CEA): ${data['COL 81']}\n` +
                    `CA-199: ${data['COL 82']}\n` +
                    `攝護腺特異抗原 (PSA): ${data['COL 83']}\n` +
                    `游離攝護腺特異抗原 (Free PSA): ${data['COL 84']}\n` +
                    `CA-125: ${data['COL 85']}\n` +
                    `CA-153: ${data['COL 86']}\n` +
                    `EB病毒VCA IgA抗體 (EB VCA IgA Ab): ${data['COL 87']}\n` +
                    `人類乳突病毒 (HPV DNA): ${data['COL 88']}\n` +
                    `德國麻疹抗體 (Rubella): ${data['COL 89']}\n` +
                    `水痘抗體(+/-) (Varicella IgG): ${data['COL 90']}\n` +
                    `G6PD酵素 (G6PD): ${data['COL 91']}\n` +
                    `飯後血糖 (Sugar PC): ${data['COL 92']}\n` +
                    `空腹血糖 (Sugar AC): ${data['COL 93']}\n` +
                    `全蛋白: ${data['COL 94']}\n` +
                    `白蛋白: ${data['COL 95']}\n` +
                    `尿素氮 (BUN): ${data['COL 96']}\n` +
                    `肌氨酸酐 (CR): ${data['COL 97']}\n` +
                    `總膽固醇 (CHOL): ${data['COL 98']}\n` +
                    `三酸甘油脂 (TG): ${data['COL 99']}\n` +
                    `高密度脂蛋白膽固醇 (HDL-C): ${data['COL 100']}\n` +
                    `低密度脂蛋白膽固醇 (LDL-C): ${data['COL 101']}\n` +
                    `膽紅素總量 (T-Bili): ${data['COL 102']}\n` +
                    `直接膽紅素 (D-Bili): ${data['COL 103']}\n` +
                    `鹼性磷酸酵素 (Alk-P): ${data['COL 104']}\n` +
                    `麩氨酸苯醋酸轉氨基酵素 (AST): ${data['COL 105']}\n` +
                    `麩氨酸丙酮酸轉氨基酵素 (ALT): ${data['COL 106']}\n` +
                    `麩氨轉酸酵素 (r-GT): ${data['COL 107']}\n` +
                    `尿酸 (UA): ${data['COL 108']}\n` +
                    `醣化血紅素 (HbA1C): ${data['COL 109']}\n` +
                    `鈣 (Ca): ${data['COL 110']}\n` +
                    `磷 (P): ${data['COL 111']}\n` +
                    `鈉 (Na): ${data['COL 112']}\n` +
                    `鉀 (K): ${data['COL 113']}\n` +
                    `氯 (Cl): ${data['COL 114']}\n` +
                    `澱粉酵素 (Amylase): ${data['COL 115']}\n` +
                    `總鐵結合能 (TIBC): ${data['COL 116']}\n` +
                    `體脂肪率 (PBF(Percent Body Fat)): ${data['COL 117']}\n` +
                    `類風濕因子 (RA): ${data['COL 118']}\n` +
                    `抗核抗體 (ANA): ${data['COL 119']}\n` +
                    `高敏感性C-反應蛋白 (hs-CRP): ${data['COL 120']}\n` +
                    `肌酸激脢 (CK): ${data['COL 121']}\n` +
                    `肌酸激脢同工脢 (CK-MB): ${data['COL 122']}\n` +
                    `肌酸激脢同工脢比率 (CK-MB%): ${data['COL 123']}\n` +
                    `同半胱胺酸 (Homocysteine): ${data['COL 124']}\n` +
                    `抗心脂抗體IgG (Anti-cardiolipin IgG): ${data['COL 125']}\n` +
                    `抗心脂抗體IgM (Anti-cardiolipin IgM): ${data['COL 126']}\n` +
                    `抗β2醣蛋白抗體IgG (Anti-glycoprotein I IgG): ${data['COL 127']}\n` +
                    `抗β2醣蛋白抗體IgM (Anti-glycoprotein I IgM): ${data['COL 128']}\n` +
                    `雌激素 (E2): ${data['COL 129']}\n` +
                    `黃體素 (Progesterone): ${data['COL 130']}\n` +
                    `濾泡刺激素 (FSH): ${data['COL 131']}\n` +
                    `黃體刺激素 (LH): ${data['COL 132']}\n` +
                    `泌乳激素 (Prolacin): ${data['COL 133']}\n` +
                    `睪固酮 (Testosterone): ${data['COL 134']}\n` +
                    `胰島素 (Insulin): ${data['COL 135']}\n` +
                    `乳酸脫氫酵素 (LDH): ${data['COL 136']}\n` +
                    `維他命D (25-OH-D): ${data['COL 137']}\n` +
                    `beta-HCG (beta-HCG): ${data['COL 138']}\n` +
                    `Anti-ENA自體免疫抗體 (Anti-ENA): ${data['COL 139']}\n` +
                    `Anti-CCP自體免疫抗體 (Anti-CCP): ${data['COL 140']}`;
                    // 根據需要填充其他欄位
                } else {
                    alert(data.error || '找不到相關病歷號碼');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('獲取資料時出錯');
            });
    }
});