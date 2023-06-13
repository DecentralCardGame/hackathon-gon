<template>
    <div class="qux-container qux-element BG">
        <div class="qux-container qux-element Leaderboard_detail">
            <div class="qux-container qux-element RoundedRectangle4">
                <label class="qux-label qux-element Label29">
                    <span class="qux-common-label">Position
                    </span>
                </label>
                <label class="qux-label qux-element Label30">
                    <span class="qux-common-label">Chain
                    </span>
                </label>
                <div class="qux-container qux-element Group_1">
                    <div class="qux-container qux-element Circle6">
                        <div class="qux-container qux-element Circle7">
                            <div class="qux-image qux-element Image9">
                        </div>
                    </div>
                </div>
            </div>
            <label class="qux-label qux-element Label31">
                <span class="qux-common-label">Captures
                </span>
            </label>
            <div class="qux-container qux-element Group">
                <div class="qux-container qux-element Circle8">
                    <div class="qux-container qux-element Circle9">
                        <div class="qux-image qux-element Image10">
                        </div>
                    </div>
                </div>
            </div>
            <div class="qux-container qux-element Group_2">
                <div class="qux-container qux-element Circle10">
                    <div class="qux-container qux-element Circle11">
                        <div class="qux-image qux-element Image11">
                        </div>
                    </div>
                </div>
            </div>
            <label class="qux-label qux-element Label32">
                <span class="qux-common-label">1
                </span>
            </label>
            <label class="qux-label qux-element Label33">
                <span class="qux-common-label">Omniflix
                </span>
            </label>
            <label class="qux-label qux-element Label34">
                <span class="qux-common-label">1
                </span>
            </label>
            <label class="qux-label qux-element Label35">
                <span class="qux-common-label">2
                </span>
            </label>
            <label class="qux-label qux-element Label37">
                <span class="qux-common-label">1
                </span>
            </label>
            <label class="qux-label qux-element Label38">
                <span class="qux-common-label">3
                </span></label>
            <label class="qux-label qux-element Label39">
                <span class="qux-common-label">Stargaze
                </span></label>
            <label class="qux-label qux-element Label40">
                <span class="qux-common-label">0
                </span>
            </label>
            <label class="qux-label qux-element Label47">
                <span class="qux-common-label">Chain War Stats
                </span>
            </label>
            <label class="qux-label qux-element Label48">
                <span class="qux-common-label">Total Chains
                </span>
            </label>
            <label class="qux-label qux-element Label49">
                <span class="qux-common-label">Total Captures
                </span>
            </label>
            <label class="qux-label qux-element Label50">
                <span class="qux-common-label">3
                </span>
            </label>
            <label class="qux-label qux-element Label51">
                <span class="qux-common-label">2
                </span>
            </label>
            <label class="qux-label qux-element Label45">
                <span class="qux-common-label">Uptick
                </span>
            </label>
        </div>
    </div>
    <div class="qux-container qux-element Card_3_bottom">
        <ChainBottomBox
            title="Stargaze"
        />
    </div>
    <div class="qux-container qux-element Card_3_top">
        <ChainInfoBox
            title="Stargaze"
        />
    </div>
    <div class="qux-container qux-element Card_3">
        <ChainTopBox
            title="Stargaze"
            id="3"
        />
    </div>
    <div class="qux-container qux-element Card_2_bottom">
        <ChainBottomBox
            title="Uptick"
        />
    </div>
    <div class="qux-container qux-element Card_2_top">
        <ChainInfoBox
            title="Uptick"
        />
    </div>
    <div class="qux-container qux-element Card_2">
        <ChainTopBox
            title="Uptick"
            id="2"
        />
    </div>
    <div class="qux-container qux-element Card_1_bottom">
        <ChainBottomBox
            title="Omniflix"
        />
    </div>
    <div class="qux-container qux-element Card_1_Top">
        <ChainInfoBox
            title="Omniflix"
            :defenders="1"
            :captured-chains="none"
        />
    </div>
    <div class="qux-container qux-element Card_1">
        <ChainTopBox
            title="Omniflix"
            id="1"
        />
    </div>
        <div class="qux-image qux-element Leaderboardtitleimage">
        </div>
    </div>
</template>

<script>
import ChainInfoBox from '@/components/ChainInfoBox'
import ChainTopBox from '@/components/ChainTopBox'
import ChainBottomBox from '@/components/ChainBottomBox'

export default {
  name: 'Leaderboard',
  components: {ChainInfoBox, ChainTopBox, ChainBottomBox},

  data() {
    return {
    }
  },
  props: {
    
  },
  mounted () {
  },
  methods: {
  }
}
</script>