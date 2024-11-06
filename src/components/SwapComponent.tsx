"use client";

import {
  Swap,
  SwapSettings,
  SwapSettingsSlippageDescription,
  SwapSettingsSlippageInput,
  SwapSettingsSlippageTitle,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
} from "@coinbase/onchainkit/swap";
import { useAccount } from "wagmi";
import type { Token } from "@coinbase/onchainkit/token";

export default function SwapComponents() {
  const { address } = useAccount();

  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image:
      "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
  };

  const TTSToken: Token = {
    address: "0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1",
    chainId: 8453,
    decimals: 18,
    name: "TTS",
    symbol: "TTS",
    image:
      "https://www.dextools.io/resources/tokens/logos/base/0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1.png?1721512530070",
  };

  // add other tokens here to display them as options in the swap
  const swappableTokens: Token[] = [ETHToken, TTSToken];

  return address ? (
    <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:py-5">
      <Swap className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <SwapSettings>
          <SwapSettingsSlippageTitle className="text-sm sm:text-base md:text-lg">
            Max. slippage
          </SwapSettingsSlippageTitle>
          <SwapSettingsSlippageDescription className="text-xs sm:text-sm md:text-base">
            Your swap will revert if the prices change by more than the selected
            percentage.
          </SwapSettingsSlippageDescription>
          <SwapSettingsSlippageInput className="w-full p-2 sm:p-3" />
        </SwapSettings>
        <SwapAmountInput
          label="Sell"
          swappableTokens={swappableTokens}
          token={ETHToken}
          type="from"
          className="w-full p-2 sm:p-3"
        />
        <SwapToggleButton className="my-2 sm:my-3" />
        <SwapAmountInput
          label="Buy"
          swappableTokens={swappableTokens}
          token={TTSToken}
          type="to"
          className="w-full p-2 sm:p-3"
        />
        <SwapButton className="w-full bg-[#7e0000] hover:shadow-lg hover:shadow-red-600 mt-4 sm:mt-6" />
        <SwapMessage className="text-xs sm:text-sm md:text-base mt-3" />
        <SwapToast className="mt-2" />
      </Swap>
    </div>
  ) : (
    <div className="text-white border border-slate-300 rounded-lg px-5 py-3 bg-white/20 backdrop-blur-sm">
      Connect your wallet to swap
    </div>
  );
}
