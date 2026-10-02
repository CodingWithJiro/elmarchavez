import { WORK_EXPERIENCES } from './experiences';
import { isNotEmpty } from '@/tests/utils';

describe('Work Experiences data', () => {
  test('every work experience has a non-empty position', () => {
    const positions = WORK_EXPERIENCES.map(({ position }) => position);
    expect(isNotEmpty(positions)).toBe(true);
  });
  test('every work experience has a non-empty company name', () => {
    const companyNames = WORK_EXPERIENCES.map(({ companyName }) => companyName);
    expect(isNotEmpty(companyNames)).toBe(true);
  });
});
