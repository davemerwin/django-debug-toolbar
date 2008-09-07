$(document).ready(function(){
    $('#djDebugToolbar').hide();
    $('.panelContentView').hide();
    
    // Style Settings
    $('#djDebugBlock').css({position: 'relative', background: 'orange', fontFamily: 'Helvetica, Arial, sans-serif'});
    
    $('#debugButton').css({background: 'orange', position: 'absolute', bottom: '-1', right: '10px', width: '60px', height: '20px', textAlign: 'center', fontSize: '12px', lineHeight: '20px', textDecoration: 'none', color: 'red', fontWeight: 'bold', outline: 'none'});
    
    $('#djDebugToolbar').css({position: 'absolute', width: '300px', top: '0px', right: '0px', overflow: 'auto', background: 'orange'});
    
    $('.panelContent').css({padding: '20px'});
    $('.panelToggle').click(function() {
        $(this).parent().children('.panelContentView').slideToggle();
        return false
    });
    
    $('#djDebugPanelList').css({margin: '20px 0px'})
    
    //Actions
    $('#debugButton').click(function() {
        $('#djDebugToolbar').slideToggle('fast');
        return false
    });
});