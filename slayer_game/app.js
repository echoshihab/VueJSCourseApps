function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            rounds: 0,
            winner:null
        };
    },
    computed:{
        playerHealthBarStyle(){
            if(this.playerHealth < 0)
            {
                return {width: 0+ '%'}
            }
            return {width: this.playerHealth + '%'}
        },
        monsterHealthBarStyle(){
            if(this.monsterHealth < 0)
            {
                return {width: 0 + '%'}

            }
            return {width: this.monsterHealth + '%'}
        },
        canUseSpecialAttack(){
            return this.rounds % 3 !== 0 ? true : false
        }
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0)
            {
               this.winner = 'draw'
            } else if(value <= 0)
            {
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0)
            {
               this.winner = 'draw'
            } else if(value <= 0)
            {
                this.winner = 'player'
            }
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.rounds = 0;
            this.winner = null;
        },
        attackMonster(){
           this.rounds++;
           const attackValue= getRandomValue(5,12);
           this.monsterHealth -= attackValue;
           this.attackPlayer()
        },
        attackPlayer(){
           const attackValue = getRandomValue(8,15)
           this.playerHealth -= attackValue;
   
        },
        specialAttackMonster()
        {
            this.rounds++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer()
        {
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100)
            {
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            
        }
    }

});

app.mount('#game');

