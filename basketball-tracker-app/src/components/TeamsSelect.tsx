import {Dispatch, FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import {TeamActions} from "../common/types/actions";
import {GetTeamsAction} from "../stores/actions";
import {TeamSelectProps} from "../common/interfaces/props";
import {Team} from "../common/models/Team";
import {Button, Col, Row, Select} from "antd";

const _ = require("lodash");

const TeamsSelect:FC<TeamSelectProps> = ({teams, getTeams}: any) => {
    const {data} = teams.teams;
    const [teamIds, setTeamIds] = useState<number[]>([]);

    useEffect(() => {
        getTeams();
    }, [getTeams])

    const onSelectChange = (value : number) => {
        setTeamIds(_.uniq([value, ...teamIds]));
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <Select
                        options={data?.map((team: Team) => {
                            return {
                                value: team.id,
                                label: team.full_name
                            }
                        })}
                        onChange={onSelectChange}
                        style={{ width: 150 }}
                    />
                </Col>
                <Col span={12}>
                    <Button color="primary" onClick={() => {
                        console.log(teamIds)
                    }
                    }>Track Team</Button>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state: TeamSelectProps) => {
    return {
        teams: state.teams
    }
}

const mapDispatchToProps = (dispatch: Dispatch<TeamActions>) => {
    return {
        getTeams: () => {
            dispatch(GetTeamsAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamsSelect)