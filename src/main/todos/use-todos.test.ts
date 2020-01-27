import { renderHook } from '@testing-library/react-hooks';
import { useTodos } from "./use-todos";

describe.skip('useTodos', () => {
    it('should have default state', () => {
        const { result } = renderHook(() => useTodos())
    })
});
