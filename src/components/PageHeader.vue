<template>
    <a href="https://discord.gg/UUAMmekQTV" class="qux-container qux-element Box"> 
        <div class="qux-image qux-element Image2">
        </div>
        <label class="qux-label qux-element qux-valign-middle Label">
            <span class="qux-common-label">
                Join us on Discord!
            </span>
        </label>
     </a>
    <div class="qux-container qux-element Box1">
        <div class="qux-image qux-element Image1">
        </div>
        
        <label class="qux-label qux-action Label1_170">
            <router-link to="/Leaderboard">
                Leaderboard
            </router-link>
        </label>
        <label class="qux-label qux-action Label2_150">
            <router-link to="/MyNFTs">
                My NFTs
            </router-link>
        </label>
    </div>
    
    <div class="qux-container qux-element Image">
        <div class="qux-container qux-element Group_Start">
            <div class="qux-image qux-element Image3"></div>
            <div class="qux-image qux-element Image4"></div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.Box{
    color:#ffffff;
    text-align:left;
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size:14px;
    letter-spacing:0px;
    line-height:1.4;
    border:0px solid #333333;
    background-color:#1d2126;
    grid-column-start:1;
    grid-column-end:2;
    grid-row-start:1;
    grid-row-end:3;
    display:grid;
    grid-template-columns:minmax(0,1fr) 159px 1.1% 30px 3.1%;
    grid-template-rows:10px 0px 32px 1fr;
}
a { 
    text-decoration: none;
    color: inherit;
}
.Label1_170{
    color:#ffffff;
    text-align:left;
    font-family:Roboto, " sans-serif";
    font-size:16px;
    letter-spacing:0px;
    line-height:1;
    border:0px solid transparent;
    grid-column-start:4;
    grid-column-end:5;
    grid-row-start:3;
    grid-row-end:5;
    z-index:4;
}
.Label1_170:hover{
    transition:all 0.2s;text-decoration:underline;
}
.Label2_150{
    color:#ffffff;
    text-align:left;
    font-family:Roboto, " sans-serif";
    font-size:16px;
    letter-spacing:0px;
    line-height:1;
    border:0px solid transparent;
    grid-column-start:6;
    grid-column-end:9;
    grid-row-start:3;
    grid-row-end:5;
    z-index:204;
    text-decoration: none !important;
}
.Label2_150:hover{
    transition:all 0.2s;
}

</style>