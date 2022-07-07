import { setDetails } from '../features/details/detailsSlice';
import { useSelector } from 'react-redux';

function CurrentGameweekDetails({ fixtureKey, team1, team2 }) {
    const details = useSelector((state) => state.details[fixtureKey]);

    return (

        <div className="cgr-details-wrapper" >
            <div className="cgr-details-team1">
                <div>Some details here for {team1.name}</div>
                <div>More details here</div>
            </div>
            <div className="cgr-details-team2">
                <div>Some details here for {team2.name}</div>
                <div>More details here</div>
            </div>
        </div>
    );
}

export default CurrentGameweekDetails;