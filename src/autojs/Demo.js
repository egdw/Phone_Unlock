//启动辅助功能
"auto";


//设置手机分辨率，不同手机有变化，此处以分辨率1080*2340为例子
setScreenMetrics(device.width, device.height);

//点亮屏幕
if (device.isScreenOn()) {

    device.wakeUp();
    sleep(300);


    //从位置(500, 1995)滑动到位置(500, 1000), 持续两秒
    swipe(device.width/2, device.height/2, device.width/2, 0, 200);
    sleep(300);

    // //设置手势解锁图案点对应的坐标，不同手机坐标位置有变化
    function pwd(number) {
                var arr = Array(null,
                [260, 943], [550, 943], [833, 943],
                [260, 1253], [550, 1253], [833, 1253],
                [260, 1518], [550, 1518], [833, 1518],[550,1507]);
                return arr[number];
    }


    //进行对坐标点的手势，以Z字型手势为例，就是拨号盘1-2-3-5-7-8-9顺序
    gesture(200, pwd(7), pwd(5), pwd(3), pwd(6), pwd(9));
    //考虑到解锁后可能不在桌面，按home1次可能是桌面的文件夹，所以进行2次home
};


//最后来个收尾停止，免得出什么幺蛾子还停不下来
exit;