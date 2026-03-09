package com.cclinux.projects.meetarea.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meetarea.model.UserModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository("MeetAreaUserMapper")
@Mapper
public interface UserMapper extends ProjectBaseMapper<UserModel> {
}
