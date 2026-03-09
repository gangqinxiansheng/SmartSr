package com.cclinux.projects.meetarea.controller.cust;

import cn.hutool.core.map.MapUtil;
import com.cclinux.framework.annotation.LoginIgnore;
import com.cclinux.framework.core.domain.ApiResult;
import com.cclinux.projects.meetarea.service.cust.TestService;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @Notes: 资讯模块
 * @Author: cclinux0730 (weixin)
 * @Ver: ccminicloud-framework 3.2.1
 */


@RestController("MeetAreaTestController")
public class TestController extends BaseMyCustController {

    @Resource(name = "MeetAreaTestService")
    TestService testService;

    @LoginIgnore
    @RequestMapping(value = "/test")
    public ApiResult test(@RequestBody Map<String, Object> input, @RequestAttribute long userId) {


        testService.mockMeetArea();
        return ApiResult.success(MapUtil.of("msg", "MeetArea完成"));
    }


}
