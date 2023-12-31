import { useState, useEffect } from 'react';
import { Title, Level, Points, ScoreStyled } from './Score.styled';

interface ScoreProps {
  level: number;
  points: number;
}

/**
 * Functional component that render the score component
 *
 * @return React.ReactElement <Score/>
 */
const Score = ({ level, points }: ScoreProps) => {
  const [pointsChanged, setPointsChanged] = useState(false);
  const [levelChanged, setLevelChanged] = useState(false);

  useEffect(() => {
    if (points === 0) return;
    setPointsChanged(true);
    const timeout = setTimeout(() => setPointsChanged(false), 200);
    return () => clearTimeout(timeout);
  }, [points]);

  useEffect(() => {
    if (level === 1) return;
    setLevelChanged(true);
    const timeout = setTimeout(() => setLevelChanged(false), 500);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <ScoreStyled>
      <Level $changed={levelChanged.toString()}>Level: {level}</Level>
      <Title>Free Play</Title>
      <Points $changed={pointsChanged.toString()}>Points: {points}</Points>
    </ScoreStyled>
  );
};

export default Score;
