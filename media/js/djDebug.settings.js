$(document).ready(function(){
    $('#djDebugToolbar').hide();
    
    // Style Settings
    $('#djDebugBlock').css({position: 'relative', background: 'orange', fontFamily: 'Helvetica, Arial, sans-serif'});
    
    $('#debugButton').css({background: 'orange', position: 'absolute', bottom: '-1', right: '10px', width: '60px', height: '20px', textAlign: 'center', fontSize: '12px', lineHeight: '20px', textDecoration: 'none', color: 'red', fontWeight: 'bold', outline: 'none'});
    
    $('.panelContent').css({padding: '20px'});
    
    $('#djDebugPanelList').css({margin: '0'})
    
    //Actions
    $('#debugButton').click(function() {
        $('#djDebugToolbar').slideToggle('fast');
        return false
    });
});