var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week1-5 \n Week6-9 \n Week10-14 \n Week15-18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1-5', 'text': 'Week1 \n 建立個人的cd2020倉儲 \n 1.下載 2019Fall可攜套件.7z  打開舊的start \n 2.登入自己的github，建立一個cd2020的新倉儲 \n 3.輸入\xa0 git clone \xa0 https://github.com/s40723243/cd2020 \xa0 \n 4.輸入git submodule add  https://github.com/mdecourse/cmsimde.git\xa0 \n 5. 將up_dir的裡的資料複 製到cd2020 \n 6.打開近端開始編譯自己的倉儲 \n \n Week2 \n python 3.7.3系統更新至python 3.8.2 \n 1.新增一個資料夾cd2020，在cd2020下新建資料夾data，在data下新增資料夾py382及 wscite432、portablegit \n 2.進入Python，點選Downloads下的 Windows ，並點選 Latest Python 3 Release - Python 3.8.2 \n 3.下載 Windows x86-64 executable installer \n 4. 開始下載，將pip選項取消，接著按下next並將檔案下載至py382。 \n 5. 下載SciTE系統 \xa0 full 64-bit download ， 解壓縮至data下的資料夾wscite432。 \n \xa06. 建立新的start.bat及stop.bat \n 7.下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 \n 8.下載 PortableGit \xa0 64-bit Git for Windows Portable \xa0 至\xa0 portablegit的資料夾下。 \n 9. 安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 \n \n \n 第二組第一次直播內容 \n \n \xa0分工內容 \n 四輪車的組員 \n 40723221 (group leader) :4輪車\xa0 (四輪車小組長) \n 40623252:4輪車 \n 40723222:4輪車 \n 40723236:4輪車 \n 40723240:4輪車 \n 40723243:4輪車(本人) \n 40732331:4輪車\xa0 \n \n Week3 \n 第三周報告影片: \n \n assignment1 \n PDF檔連結: file:///C:/Users/curry/OneDrive/桌面/Assignment1.pdf \n \n', 'tags': '', 'url': 'Week1-5.html'}, {'title': 'Week6-9', 'text': 'week6 \n W6直播分組 \n 分工內容: \n topic0: 40723237 40723221 40723222 40723228 40723243 40723244 40723236 40623117 \n topic1: 40723221 40723222 40623252 40523253 40723249 40732331 40723240 40723237 \n 直播影片: \n \n \n Topic0: \n DigitalProductCollaboration翻譯: \n IndustrialAndEngineeringProductDesignCollaboration翻譯: \n Topic1: \n \xa0MechanicalDesignProcess翻譯: \n \n \n', 'tags': '', 'url': 'Week6-9.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};