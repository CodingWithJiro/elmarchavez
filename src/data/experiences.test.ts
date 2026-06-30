import { workExperiences, certificates } from './experiences';

describe('Work Experiences and Certificates data', () => {
  test('every work experience has a non-empty position', () => {
    const positions = workExperiences.map(({ position }) => position);
    const isNotEmpty = positions.every(
      (position) => position.trim().length > 0,
    );
    expect(isNotEmpty).toBe(true);
  });
});
