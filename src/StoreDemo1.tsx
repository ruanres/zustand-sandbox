import { create } from "zustand";

type BearsState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useBearStore = create<BearsState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const StoreDemo1 = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <div className="flex flex-col gap-2">
      <div>Bears: {bears}</div>
      <button className="border-1 self-start rounded p-2" onClick={increasePopulation}>
        Increase Population
      </button>
      <button className="border-1 self-start rounded p-2" onClick={removeAllBears}>
        Remove All Bears
      </button>
    </div>
  );
};
