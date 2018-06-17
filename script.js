$('document').ready(function(){
    var plaintext_user_input;
    var ciphertext_user_input;
    var increment = 0;
    var decrement = 0;
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var plaintext_input_segments = [];
    var ciphertext_input_segments = [];
    var ciphertext_message = "";
    var plaintext_message = "";
    
    if(window.innerWidth > window.innerHeight){
        $("img").css("height", window.innerHeight);
        $("img").css("width", window.innerHeight);
        $("img").css("left", (window.innerWidth - window.innerHeight)/2);
    } else{
        $("img").css("height", window.innerWidth);
        $("img").css("width", window.innerWidth);
        $("img").css("top", (window.innerHeight - window.innerWidth)/2);
    }
    
    
    $('#to_ciphertext_btn').click(function(){
        plaintext_user_input = $("#to_ciphertext_input").val().toLowerCase();
        increment = Number($("#to_ciphertext_number").val());
        if(increment < 0 || increment != Math.floor(increment)){
            alert("Please Enter A Whole Number!");
        }else{
            console.log(increment);
            plaintext_input_slice();
        }
    })
    
    function plaintext_input_slice(){
        plaintext_input_segments = [];
        for(var i = 0; i < plaintext_user_input.length; i ++){
            plaintext_input_segments.push(plaintext_user_input.slice(i, i + 1));
        }
        console.log(plaintext_input_segments);
        plaintext_to_ciphertext_convertion();
    }
    
    
    function plaintext_to_ciphertext_convertion(){
        ciphertext_message = "";
        
        //for every letter in the input
        for(var i = 0; i < plaintext_input_segments.length; i++){
            
            //detect the letter
            for(var j = 0; j < alphabet.length; j++){
                if(plaintext_input_segments[i] === alphabet[j]){
                    ciphertext_message += alphabet[(j + increment) % 26];
                } 
            }
            //if it's a space
            if(plaintext_input_segments[i] === " "){
                ciphertext_message += " ";
            }
        }
        $('#ciphertext_output').html(ciphertext_message);
    }
    
    
    $('#to_plaintext_btn').click(function(){
        ciphertext_user_input = $("#to_plaintext_input").val().toLowerCase();
        decrement = Number($("#to_plaintext_number").val());
        ciphertext_input_slice();
    })
    
    function ciphertext_input_slice(){
        ciphertext_input_segments = [];
        for(var i = 0; i < ciphertext_user_input.length; i ++){
            ciphertext_input_segments.push(ciphertext_user_input.slice(i, i + 1));
        }
        if(decrement < 0 || decrement != Math.floor(decrement)){
            alert("Please Enter A Whole Number!");
        }else{
            console.log(ciphertext_input_segments);
            ciphertext_to_plaintext_convertion();
        }
    }
    
    
    function ciphertext_to_plaintext_convertion(){
        plaintext_message = "";
        
        //for every letter in the input
        for(var i = 0; i < ciphertext_input_segments.length; i++){
            
            //detect the letter
            for(var j = 0; j < alphabet.length; j++){
                if(ciphertext_input_segments[i] === alphabet[j]){
                    plaintext_message += alphabet[(j + 26 - (decrement % 26)) % 26];
                    // if((j - decrement) % 26 >= 0){
                        
                    // } else if((j - decrement) % 26 < 0){
                    //     plaintext_message += alphabet[-1 * (j - decrement) % 26];
                    //     console.log(alphabet[(j - decrement) % 26], j - decrement, (j-decrement) % 26);
                    // }
                    
                } 
            }
            //if it's a space
            if(plaintext_input_segments[i] === " "){
                plaintext_message += " ";
            }
        }
        $('#plaintext_output').html(plaintext_message);
    }
});