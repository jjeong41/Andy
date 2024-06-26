package com.a102.andy.app.member.repository;

import com.a102.andy.app.member.controller.dto.MemberDetailResponseDto;
import com.a102.andy.app.member.controller.dto.MemberSimpleResponseDto;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface MemberCustomRepository {

    Optional<MemberDetailResponseDto> getMemberDetail(String memberId);

    List<MemberSimpleResponseDto> getCurrentMembers(Set<String> currentMemberIdSet);
}
