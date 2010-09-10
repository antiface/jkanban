$.fn.AddSwimLane = function(options) {

    var defaults = {
        swimlanes:[],
        cards: [],
        swimlaneAssignments: []
    };
    var opts = $.extend(defaults, options);
    var html = $('<div class="swimlane"/>');
    $.each(opts.cards, function(i, card){
        html.AddKanbanCard(card);
    })
    $(this).append(html);
}