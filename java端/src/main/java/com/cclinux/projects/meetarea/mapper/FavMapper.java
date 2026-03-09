package com.cclinux.projects.meetarea.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meetarea.model.FavModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository("MeetAreaFavMapper")
@Mapper
public interface FavMapper extends ProjectBaseMapper<FavModel> {
}
